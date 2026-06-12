import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    base: '/RazorBlade/',
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@core': path.resolve(__dirname, './src/core'),
            '@application': path.resolve(__dirname, './src/application'),
            '@infrastructure': path.resolve(__dirname, './src/infrastructure'),
            '@presentation': path.resolve(__dirname, './src/presentation')
        }
    }
});
