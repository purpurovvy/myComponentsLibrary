import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',  // Another output file for the bundle
            format: 'esm',  // The format of the second output bundle
            sourcemap: false,
            inlineDynamicImports: true,
        },
        {
            file: 'dist/index.cjs.js',  // The file to output the bundle to
            format: 'cjs',  // The format of the output bundle
            sourcemap: false,  // Generate source map
            inlineDynamicImports: true,  // Inline dynamic imports in the generated bundle
        },
    ],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',  // Path to the TypeScript configuration file
        }),
        resolve(),
        commonjs(),
        terser()
    ],
    onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
            return
        }
        warn(warning)
    }
};