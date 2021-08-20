module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            padding: {
                '1/2': '50%'
            },
            height: {
                'c-v-24': 'calc(100vh - 6rem)',
                'c-%-4': 'calc(100% - 1rem)',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
