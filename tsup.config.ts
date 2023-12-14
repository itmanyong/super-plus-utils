import { defineConfig } from 'tsup'

export default defineConfig(() => {
  return {
    entry: {
      index: `src/index.ts`,
    },
    format: ['cjs', 'esm'],
    outDir: 'dist',
    dts: true,
    clean: true,
    splitting: false,
    sourcemap: false,
    minify: false,
    shims: false,
    legacyOutput: false
  }
})

