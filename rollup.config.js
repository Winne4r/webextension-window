import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import {eslint} from 'rollup-plugin-eslint';

export default {
    input: './src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'es'
    },
    plugins: [
        eslint(),
        resolve({
            jsnext: true,
            extensions: ['.js']
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        terser({compress: {
            drop_console: true
        }})
    ]
}