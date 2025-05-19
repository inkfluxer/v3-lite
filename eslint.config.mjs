import antfu from '@antfu/eslint-config'

export default antfu(
    {
        // Enable stylistic formatting rules
        // stylistic: true,

        // Or customize the stylistic rules
        stylistic: {
            indent: 4, // or 'tab'
            quotes: 'single', // or 'double'
        },

        formatters: {
            css: true,
            html: true,
            markdown: 'prettier',
        },

        // TypeScript and Vue are autodetected, you can also explicitly enable them:
        // typescript: true,
        vue: true,

        // Disable jsonc and yaml support
        jsonc: false,
        yaml: false,

        // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
        ignores: [
            '**/fixtures',
            // ...globs
        ],
    },
    {
        files: ['**/*.vue'],
        rules: {
            'vue/component-definition-name-casing': ['error', 'PascalCase'], // 强制执行组件定义名称的特定大小写
            /**
             * 强制执行属性的顺序
             * docs: https://eslint.vuejs.org/rules/attributes-order.html
             */
            'vue/attributes-order': [
                'error',
                {
                    order: [
                        'DEFINITION',
                        'LIST_RENDERING',
                        'CONDITIONALS',
                        'RENDER_MODIFIERS',
                        'GLOBAL',
                        ['UNIQUE', 'SLOT'],
                        'TWO_WAY_BINDING',
                        'OTHER_DIRECTIVES',
                        'ATTR_DYNAMIC',
                        'ATTR_STATIC',
                        'ATTR_SHORTHAND_BOOL',
                        'EVENTS',
                        'CONTENT',
                    ],
                    alphabetical: true,
                },
            ],
            'vue/html-self-closing': 'off',
        },
    },
    {
        rules: {
            'no-var': 'error',
            'prefer-const': 'error',
            'no-console': 'warn',
            'prefer-template': 'warn',
            'antfu/top-level-function': 'off',
            'no-labels': 'off',
            'no-lone-blocks': 'off',
            'no-restricted-syntax': 'off',
            'node/prefer-global/buffer': 'off',
            'node/prefer-global/process': 'off',
            'prefer-rest-params': 'off',
            'symbol-description': 'off',
            'ts/ban-types': 'off',
            'ts/no-empty-object-type': 'off',
            'ts/no-invalid-this': 'off',
            'ts/no-unnecessary-type-constraint': 'off',
            'vue/no-template-shadow': 'off',
            'vue/no-v-text-v-html-on-component': 'off',
        },
    },
)
