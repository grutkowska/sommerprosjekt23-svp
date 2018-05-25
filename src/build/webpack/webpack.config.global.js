const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const webpackConfig = {
    entry: {
        'js/settings': [`${__dirname}/../../setup.js`],
        'js/bundle': ['babel-polyfill', `${__dirname}/../../app/bootstrap.tsx`]
    },
    output: {
        path: path.resolve(__dirname, './../../../dist'),
        filename: '[name].js',
        publicPath: '/foreldrepengesoknad/dist'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
        alias: {
            app: path.resolve(__dirname, './../../app'),
            uttaksplan: path.resolve(__dirname, './../../uttaksplan')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: require.resolve('tslint-loader'),
                enforce: 'pre'
            },
            {
                test: /\.(ts|tsx)$/,
                include: [
                    path.resolve(__dirname, './../../app'),
                    path.resolve(__dirname, './../../uttaksplan')
                ],
                loader: require.resolve('awesome-typescript-loader')
            },

            {
                test: /\.js$/,
                use: [{ loader: 'babel-loader' }],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                globalVars: {
                                    coreModulePath: '"~"',
                                    nodeModulesPath: '"~"'
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.svg$/,
                use: 'svg-sprite-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            appSettings: {
                REST_API_URL: JSON.stringify(
                    process.env.FORELDREPENGESOKNAD_API_URL
                ),
                LOGIN_URL: JSON.stringify(process.env.LOGINSERVICE_URL)
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css?[hash]-[chunkhash]-[name]',
            disable: false,
            allChunks: true
        }),
        new SpriteLoaderPlugin({
            plainSprite: true
        }),
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV)
        })
    ]
};

module.exports = webpackConfig;
