const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, options) => {
  const isProd = options.mode === 'production'

  return {
    entry: {
      'main': ['./src/main.js', './src/main.scss'],
      'amp': ['./src/amp.scss']
    },
    output: {
      path: path.join(__dirname, 'assets'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProd,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: !isProd,
                postcssOptions: {
                  plugins: [
                    require('postcss-inline-svg')({
                      removeFill: true,
                      xmlns: false
                    }),
                    require('cssnano')({
                      preset: [
                        'default',
                        {
                          autoprefixer: {
                          },
                          discardComments: {
                            removeAll: !isProd
                          }
                        }
                      ]
                    })
                  ]
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProd
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
  }
}
