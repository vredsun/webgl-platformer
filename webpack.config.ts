import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isDevelopment = process.env.NODE_ENV !== 'production';

const DIR_ROOT = path.join(__dirname);
const DIR_APP_SRC = path.join(DIR_ROOT, 'src');
const DIR_APP_DIST = path.join(DIR_ROOT, 'dist');

const pkg = require(path.join(DIR_ROOT, 'package.json'));

const PATH_TO_INDEX_FILE = path.join(DIR_APP_SRC, 'index.tsx');

let BUILD = {
  output: {
    path: DIR_APP_DIST,
    publicPath: process.env.PUBLIC_PATH,
  },
  htmlTemplateName: path.join(DIR_APP_SRC, 'ui', 'html', 'index.hbs'),
};

const getPlugins = () => {
  const plugins = [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: BUILD.htmlTemplateName,
      publicPath: process.env.PUBLIC_PATH,
      hash: true,
      title: 'webgl-platformer',
      scriptLoading: 'defer',
      meta: {
        'mobile-web-app-capable': 'yes',
        'viewport': 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui',
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.PUBLIC_PATH': JSON.stringify(process.env.PUBLIC_PATH),
      '__DEV__': isDevelopment,
      '_VERSION_': JSON.stringify(pkg.version),
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV) || 'development',
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
  ];

  if (isDevelopment) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  } else {
    // some only prod
  }

  if (false) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      }),
    );
  }

  return plugins;
};

const config: webpack.Configuration = {
  mode: isDevelopment ? 'development' : 'production',
  // mode: 'development',
  node: {
    fs: 'empty',
    __filename: true,
    __dirname: true
  },
  devtool: isDevelopment ? 'eval' : false,
  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    'react-hot-loader/patch',
    'whatwg-fetch',
    PATH_TO_INDEX_FILE,
  ],
  output: {
    path: BUILD.output.path,
    publicPath: BUILD.output.publicPath,
    filename: isDevelopment ? '[name].bundle.js' : 'app.[name].[contenthash].js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    port: 3000,
    hot: true,
    noInfo: true,
    quiet: false,
    inline: true,
    lazy: false,
    public: '',
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      'react-dom': isDevelopment ? '@hot-loader/react-dom' : 'react-dom',
    },
    extensions: [
      '.json',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
  },
  optimization: {
    noEmitOnErrors: true,
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader',
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopment,
            },
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              esModule: false,
            }
          },
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: getPlugins(),
};
module.exports = config;
