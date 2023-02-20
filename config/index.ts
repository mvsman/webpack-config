import webpack, {
  ResolveOptions,
  RuleSetRule,
  WebpackPluginInstance,
} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export type BuildMode = 'development' | 'production'

export interface BuildEnv {
  readonly mode: BuildMode
  readonly port: number
}

export const webpackLoaders = (isDev: boolean): RuleSetRule[] => {
  const cssLoader = {
    test: /\.css$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
  }

  const tsLoader = {
    test: /\.ts$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [tsLoader, cssLoader]
}

export const webpackResolvers = (): ResolveOptions => ({
  extensions: ['.ts', '.js'],
})

export const webpackPlugins = (): WebpackPluginInstance[] => [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: 'main.css',
  }),
]

export const webpackDevServer = (port: number) => ({
  open: true,
  port,
})
