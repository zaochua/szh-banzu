import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [vue()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  base: process.env.NODE_ENV === "production" ? "/szh-banzu/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "true", // 启用详细错误信息
  },
});
