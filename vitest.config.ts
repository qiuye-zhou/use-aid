import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['./packages/core/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        environment: 'happy-dom',
        globals: true,
        deps: {
            inline: [
                'vue'
            ]
        }
    }
});
