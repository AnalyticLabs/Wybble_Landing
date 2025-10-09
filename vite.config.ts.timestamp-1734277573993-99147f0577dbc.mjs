// vite.config.ts
import { reactRouter } from "file:///home/sarujit/dev/wybble/wybble-landing/node_modules/.pnpm/@react-router+dev@7.0.2_@react-router+serve@7.0.2_react-router@7.0.2_react-dom@19.0.0_react@1_5tcswnfpu6tchk4kgt33oto3s4/node_modules/@react-router/dev/dist/vite.js";
import autoprefixer from "file:///home/sarujit/dev/wybble/wybble-landing/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.49/node_modules/autoprefixer/lib/autoprefixer.js";
import path from "path";
import tailwindcss from "file:///home/sarujit/dev/wybble/wybble-landing/node_modules/.pnpm/tailwindcss@3.4.16/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///home/sarujit/dev/wybble/wybble-landing/node_modules/.pnpm/vite@5.4.11_@types+node@20.17.10/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///home/sarujit/dev/wybble/wybble-landing/node_modules/.pnpm/vite-tsconfig-paths@5.1.4_typescript@5.7.2_vite@5.4.11_@types+node@20.17.10_/node_modules/vite-tsconfig-paths/dist/index.js";
var __vite_injected_original_dirname = "/home/sarujit/dev/wybble/wybble-landing";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./app")
    }
  },
  plugins: [reactRouter(), tsconfigPaths()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zYXJ1aml0L2Rldi93eWJibGUvd3liYmxlLWxhbmRpbmdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3NhcnVqaXQvZGV2L3d5YmJsZS93eWJibGUtbGFuZGluZy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9zYXJ1aml0L2Rldi93eWJibGUvd3liYmxlLWxhbmRpbmcvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZWFjdFJvdXRlciB9IGZyb20gXCJAcmVhY3Qtcm91dGVyL2Rldi92aXRlXCI7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcInRhaWx3aW5kY3NzXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW3RhaWx3aW5kY3NzLCBhdXRvcHJlZml4ZXJdLFxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9hcHBcIiksXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3RSb3V0ZXIoKSwgdHNjb25maWdQYXRocygpXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UyxTQUFTLG1CQUFtQjtBQUNuVSxPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFVBQVU7QUFDakIsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFMMUIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLGFBQWEsWUFBWTtBQUFBLElBQ3JDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7QUFDMUMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
