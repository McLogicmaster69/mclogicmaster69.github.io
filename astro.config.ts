import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mclogicmaster69.github.io",
  base: "/portfoliowebsite",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Roboto",
        cssVariable: "--font-roboto",
      },
      {
        provider: fontProviders.google(),
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
      },
    ],
  },
});
