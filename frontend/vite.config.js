var _a;
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@ndip/shared": path.resolve(__dirname, "../shared"),
        },
    },
    server: {
        port: 3000,
        proxy: {
            "/api": {
                target: (_a = process.env.VITE_API_BASE_URL) !== null && _a !== void 0 ? _a : "http://localhost:4500",
                changeOrigin: true,
            },
        },
    },
});
