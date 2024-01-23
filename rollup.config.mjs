import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from '@rollup/plugin-terser';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import sourcemaps from 'rollup-plugin-sourcemaps';

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: 'dist/index.cjs.js',
                format: "cjs",
                sourcemap: false
            },
            {
                file: 'dist/index.js',
                format: "esm",
                sourcemap: false
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            terser(),
        ],
        external: ["react", "react-dom", "@emotion/react", "@emotion/styled", "@mui/icons-material", "@mui/material"],
    },
    {
        input: "src/index.ts",
        output: [{file: "dist/types.d.ts", format: "es", sourcemap: false}],
        plugins: [dts()],
    },
];