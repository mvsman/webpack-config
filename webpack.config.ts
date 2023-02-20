import path from 'path'
import { Configuration } from 'webpack'
import 'webpack-dev-server'

import {
  BuildEnv,
  webpackPlugins,
  webpackLoaders,
  webpackResolvers,
  webpackDevServer,
} from './config'

export default (env: BuildEnv) => {
  const mode = env.mode || 'development'
  const port = env.port || 3000

  const isDev = mode === 'development'

  const webpackConfig: Configuration = {
    mode,
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      clean: true,
    },
    plugins: webpackPlugins(),
    module: {
      rules: webpackLoaders(isDev),
    },
    resolve: webpackResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? webpackDevServer(port) : undefined,
  }

  return webpackConfig
}
