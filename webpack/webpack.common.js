const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// console.log(path.resolve(__dirname, '..', './public/index.html'))
module.exports = {
    //   entry: path.resolve(__dirname, '..', './src/index.js'),
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
    module: {

        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/, // archivos .css o .scss
                // test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1, // We always need to apply postcss-loader before css-loader
                            modules: {
                                auto: /\.module\.scss$/, // true
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },

                ]
            },


            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader'],
            // },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: './assets',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: '/public',
            },

        ]
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
        publicPath: '/',    

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './public/index.html'),
            publicPath: '/', 
            // favicon: '/public/assets/images/fav/favicon.ico'
        }),
    ],
    stats: {
        children: true,
    }
}