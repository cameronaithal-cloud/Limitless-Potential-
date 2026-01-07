
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // 1. Resolve the "chunk size" warning by increasing the limit
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        // 2. Resolve the "chunk size" warning by splitting libraries into separate files
        // This makes the site load significantly faster for repeat visitors.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('@google/genai')) return 'vendor-ai';
            return 'vendor-utils';
          }
        },
      },
    },
  },
  // Optimization for development environment
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@google/genai'],
  },
});
