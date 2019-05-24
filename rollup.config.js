import babel from 'rollup-plugin-babel';
import { author, name, version, license } from './package.json';

const banner =
  `${'/*!\n' + ' * '}${name}.js v${version}\n` +
  ` * (c) 2019-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the ${license} License.\n` +
  ` */`;

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/index.cjs.js',
      format: 'cjs',
      banner,
    },
    {
      file: 'lib/index.esm.js',
      format: 'es',
      banner,
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    })
  ],
}