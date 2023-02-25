import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  name: 'tsup',
  target: 'es2015',
  entry: ['../../index.tsx', '../../src/**/*.tsx'],
  format: ['esm'],
  clean: true,
  minify: !options.watch,
  outDir: '../../dist',
  treeshake: true,
  external: ['react'],
  dts: true,
}))
