// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'
export default { // can be an array (for multiple inputs)
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**',
            include: '**/**.js',
            babelrc: false,
            presets: [['env', { modules: false }], 'stage-0'],
            plugins: ["transform-class-properties"]
        }),
        postcss({
            plugins: [
            ],
            extensions: ['.css', '.scss']  // default value
        })
    ]
};