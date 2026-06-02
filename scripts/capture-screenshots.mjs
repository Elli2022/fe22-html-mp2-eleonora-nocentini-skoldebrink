import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "public", "screenshots");
const baseUrl = process.env.SCREENSHOT_BASE_URL ?? "http://127.0.0.1:4321";

async function waitForServer(url, timeoutMs = 60_000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Server not ready yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Server did not become ready at ${url}`);
}

async function capture() {
  await mkdir(outputDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const shots = [
    { name: "home.png", path: "/" },
    { name: "menu.png", path: "/html/meny.html" },
    { name: "booking.png", path: "/html/bokabord.html" },
  ];

  for (const shot of shots) {
    await page.goto(`${baseUrl}${shot.path}`, { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(outputDir, shot.name),
      fullPage: false,
    });
  }

  await browser.close();
}

const shouldStartServer = !process.env.SCREENSHOT_BASE_URL;
let serverProcess;

if (shouldStartServer) {
  serverProcess = spawn("npm", ["run", "preview", "--", "--port", "4321"], {
    cwd: rootDir,
    stdio: "inherit",
  });
  await waitForServer(baseUrl);
}

try {
  await capture();
  console.log(`Screenshots saved to ${outputDir}`);
} finally {
  if (serverProcess) {
    serverProcess.kill("SIGTERM");
  }
}
