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
  },
});

devWebpackConfig.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': '"development"',
}));

export default devWebpackConfig;
