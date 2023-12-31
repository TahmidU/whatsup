import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://127.0.0.1:8000",
    },
    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
});
