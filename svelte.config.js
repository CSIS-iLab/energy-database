import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess({
    scss: {
      // Optionally include paths for SCSS files
      includePaths: ["src/scss"],
    },
  }),
}
