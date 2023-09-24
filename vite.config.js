import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react({
            babelrc: true,
        }),
        laravel({
            input: ["resources/js/app.tsx"],
            refresh: true,
        }),
    ],
    test: {
        include: ["**/__tests__/**/*.test.*"],
        globals: true,
    },
});
