import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // React plugin for Vite
  plugins: [react()],

  // Set the correct base path for subdirectory deployment
  base: '/mesuemConnect/',

  // Optimize dependencies
  optimizeDeps: {
    include: ['@mui/icons-material'],
  },

  // Build options
  build: {
    outDir: 'dist', // Output directory
    assetsDir: 'assets', // Directory for static assets
    rollupOptions: {
      // Externalize dependencies if needed
      external: ['@mui/icons-material'],
    },
  },

  // Local development server settings
  server: {
    open: true,        // Auto open browser
    port: 3000,        // Dev server port
    strictPort: true,  // Fail if port is taken
  },

  // If you use preprocessors like SCSS, you can configure them here
  // Remove this block if you're using plain CSS only
  // Uncomment and modify if you use SCSS:
  /*
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/global.scss";',
      },
    },
  },
  */
});
