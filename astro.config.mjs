import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://high-street-deli-website.netlify.app",
  output: "static",
  build: {
    format: "file",
  },
});
