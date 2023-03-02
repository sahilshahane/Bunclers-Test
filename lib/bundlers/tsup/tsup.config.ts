import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  name: 'TSUP - PRODUCTION',
  target: 'es6',
  entry: ['../../index.tsx', '../../src/**/*.tsx'],
  format: ['esm'],
  clean: true,
  minify: !options.watch,
  outDir: '../../dist',
  treeshake: true,
  external: ['react'],
  dts: true,
}))
