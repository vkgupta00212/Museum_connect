import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // Set the base path for deployment
  base: '/mesuemConnect/',

  // Optimize dependency bundling for better performance
  optimizeDeps: {
    include: ['@mui/icons-material'], // Pre-bundle icons material
  },

  build: {
    // Ensure proper handling of assets during build
    rollupOptions: {
      external: ['@mui/icons-material'], // Treat icons material as external
    },
    // Set asset directory structure
    outDir: 'dist',
    assetsDir: 'assets',
  },

  // Configure server settings
  server: {
    open: true, // Automatically open the app in the browser
    port: 3000, // Set the port for local development
    strictPort: true, // Ensure the specified port is used
  },

  // Ensure proper handling of CSS files
  css: {
    preprocessorOptions: {
      css: {
        additionalData: '@import "src/styles/global.css";', // Example global styles
      },
    },
  },
});
