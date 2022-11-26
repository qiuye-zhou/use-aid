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
                file: './dist/usecj.js',
                format: 'cjs'
            },
            {
                file: './dist/index.js',
                format: 'es'
            },
            {
                file: './dist/useiife.js',
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
