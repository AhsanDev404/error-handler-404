import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts', // Entry point of your package
  output: {
    file: 'dist/index.js', // Output file
    format: 'cjs', // CommonJS format for Node.js
    sourcemap: true,
  },
  plugins: [
    typescript(), // Use TypeScript plugin
  ],
  external: [], // Add external dependencies here if needed
};
