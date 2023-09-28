import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react({
            babel: {
                configFile: "./babel.config.json",
            },
        }),
        laravel({
            input: ["resources/js/app.tsx"],
            refresh: true,
        }),
    ],
    test: {
        include: ["**/__tests__/**/*.test.*"],
        setupFiles: "./resources/js/configs/SetupTest.ts",
        globals: true,
        environment: "jsdom",
    },
});
