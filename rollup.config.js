// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
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
            babelrc: false,
            presets: [['env', { modules: false }],'stage-0']
        })
    ]
};