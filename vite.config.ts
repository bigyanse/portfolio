import { defineConfig } from "vite";

export default defineConfig({
    plugins: [],
    base: '/portfolio/', // Replace 'portfolio' with your actual repository name
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
    },
});