import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
export default [
    {
        input: 'packages/core/index.ts',
        output: {
            file: './dist/index.d.ts',
            format: 'es'
        },
        plugins: [
            dts()
        ],
        external: [
            'vue'
        ]
    },
    {
        input: 'packages/core/index.ts',
        output: [
            {
                file: './dist/index.cjs',
                format: 'cjs'
            },
            {
                file: './dist/index.mjs',
                format: 'es'
            },
            {
                file: './dist/index.iife.js',
                format: 'iife',
                name: 'useaid',
                extend: true,
                globals: {
                    vue: 'vue'
                }
            }
        ],
        plugins: [
            esbuild({ minify: true })
        ],
        external: [
            'vue'
        ]
    }
];
