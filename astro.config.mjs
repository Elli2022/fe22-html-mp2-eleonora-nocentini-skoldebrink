import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://high-street-deli-restaurant-site.netlify.app",
  output: "static",
  build: {
    format: "file",
  },
});
