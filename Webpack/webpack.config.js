const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const optimization = () => {
    const configObject = {
        splitChunks:{
            chunks: 'all'
        }
    };

    if(isProd){
        configObject.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ];
    }
    return configObject;
};

let mode = 'development'; 
if (process.env.NODE_ENV === 'production') { 
  mode = 'production';
}

const plugins =[
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
        minify: {
            collapseWhitespace: isProd
        }
    }),

    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: `./css/${filename('css')}`
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
];

if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode,
    plugins,
    entry: './js/main.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app')
    },
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'app')
        },
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080
    },
    optimization: optimization(),
    devtool: isProd ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    esModule: false
                }
                
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_moduls/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      cacheDirectory: true,
                    }
                }
            },
            {
                test: /\.(?:|gif|png|jpg|jpeg|svg|ico)$/,
                type: 'asset/resource',
                generator: {
                    filename: `img/${filename('[ext]')}`
                },
                use: {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg:{
                            progressive: true,
                            quality: 70
                        }
                    }
                }
            },
            {
                test: /\.(?:|mp4|mov|)$/,
                type: 'asset/resource',
                generator: {
                    filename: `video/${filename('[ext]')}`
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `fonts/${filename('[ext]')}`
                }
            }
        ]
    }
}