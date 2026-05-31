import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://elli2022.github.io",
  base: "/HighStDeliAndMarketImitation",
  outDir: "./docs",
  output: "static",
  build: {
    format: "file",
  },
});
