import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerDirectives,
} from 'unocss'

export default defineConfig({
    shortcuts: [
        ['center', 'flex justify-center items-center'],
    ],
    presets: [
        presetUno(),
        // presetWind4(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true,
        }),
    ],
    content: {
        pipeline: {
            include: [
                // the default
                /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                // include js/ts files
                '(components|src)/**/*.{js,ts}',
            ],
        },
    },
    transformers: [
        transformerDirectives(),
    ],
    rules: [
        [
            /^slide-enter-(\d+)$/,
            ([_, n]) => ({
                '--enter-stage': n,
            }),
        ],
        [
            /^ls-(\d+)$/,
            ([_, num]: any) => ({
                'letter-spacing': `${num * 0.01}rem`,
            }),
        ],
        [
            /^bd(?:-([\w#]+))?$/,
            ([, color]) => ({
                border: `0.01rem solid ${color || 'blue'}`,
            }),
        ],
    ],
})
