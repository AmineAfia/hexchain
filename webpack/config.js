import path from 'path';

const ROOT_PATH = path.resolve('./');

export default (dev = false) => {
  const config = {
    entry: {
      template: [
        path.resolve('src/index'),
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: path.resolve(ROOT_PATH, 'build'),
      filename: `[name].bundle.js?${dev ? '' : '[hash]'}`,
      chunkFilename: '[name].chunk.js',
      publicPath: '',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'url-loader?limit=10000',
            'img-loader',
          ],
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
          include: '/build/contracts/'
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: 'style-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: !dev,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                minimize: !dev,
              },
            },
          ],
        },
      ],
    },
  };

  if (dev) {
    config.entry.template.unshift('react-hot-loader/patch');
  }

  return config;
};
