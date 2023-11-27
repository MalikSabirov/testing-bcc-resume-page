import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@shared": path.resolve("src/shared"),
      "@app": path.resolve("src/app"),
      "@modules": path.resolve("src/modules"),
      "@assets": path.resolve("src/assets"),
      "@models": path.resolve("src/models"),
    },
  },
})
