import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  clean: true,
  outDir: './dist',
  format: ['esm', 'cjs'],
  dts: true,
  minify: false,
})
