const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        'single-spa-config': ['babel-polyfill', './src/single-spa-config.js'],
        'styles': [
            './src\\styles.scss'
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        extensions: ['.js', 'ts', '.tsx']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src\\single-spa-index.html',
            inject: true
        }),
        new CopyWebpackPlugin([{
            "context": "src",
            "to": "",
            "from": {
                "glob": "assets/**/*",
                "dot": true
            }
        }], {
            "ignore": [
                ".gitkeep"
            ],
            "debug": "warning"
        }),
        // new UglifyJsPlugin()
    ],
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
                "test": /\.scss$|\.sass$/,
                "use": [
                    "style-loader",
                    {
                        "loader": "css-loader",
                        "options": {
                            "sourceMap": false,
                            "importLoaders": 1
                        }
                    },
                    {
                        "loader": "sass-loader",
                        "options": {
                            "sourceMap": false,
                            "includePaths": []
                        }
                    }
                ]
            },
            {
                test: /\.js?$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                'test': /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
                'loader': 'url-loader',
                'options': {
                    'name': '[name].[ext]',
                }
            }
        ]
    }
};