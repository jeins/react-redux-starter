import webpack from 'webpack';
import deepExtend from 'deep-extend';
import webpackConfig from './webpack.config';

const devWebpackConfig = deepExtend(webpackConfig, {
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    contentBase: './public',
    hot: true,
    proxy: {
      '/api': {
        // target: 'http://localhost:9001', // json-server mocks data services
        target: 'http://192.168.30.37:8080',
        secure: false,
        pathRewrite: {
          '/api': '/',
        },
      },
    },
  },
});

devWebpackConfig.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': '"development"',
}));

export default devWebpackConfig;
