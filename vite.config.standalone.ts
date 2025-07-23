import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  build: {
    minify: mode === 'production',
    sourcemap: mode !== 'production' ? 'inline' : false,
    target: 'es2017',
    lib: {
      entry: 'src/lib/published/index.svelte.ts',
      name: 'Next',
      fileName: (format) => `next.${format}.js`,
      formats: ['umd'],
    },
    outDir: '.svelte-kit/web-components',
  },
}));
