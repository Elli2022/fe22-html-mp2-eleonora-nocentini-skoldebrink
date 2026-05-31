import { mkdir, writeFile } from "node:fs/promises";

await mkdir(new URL("../docs", import.meta.url), { recursive: true });
await writeFile(new URL("../docs/.nojekyll", import.meta.url), "");
