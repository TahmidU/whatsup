import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    [
                        "babel-plugin-styled-components",
                        {
                            ssr: false,
                            displayName: true,
                            fileName: false,
                        },
                    ],
                ],
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
        css: true,
    },
});
