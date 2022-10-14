// rollup.config.js
import { uglify } from "rollup-plugin-uglify";
import { babel } from '@rollup/plugin-babel';

const config = {
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ],
    input: 'src/Treemaps.js',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'Treemaps',
        globals: {
            react: "React"
        }
    }
}
export default config