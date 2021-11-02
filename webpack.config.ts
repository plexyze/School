import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server';

delete process.env.TS_NODE_PROJECT;

const isDevelopment = process.env.NODE_ENV === 'development';

const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            plugins: [['autoprefixer', { grid: 'autoplace' }]],
        },
    },
};

const config = {
    mode: 'development',
    entry: './source/index.ts',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            assets: path.join(__dirname, 'source/assets'),
            components: path.join(__dirname, 'source/components'),
            constants: path.join(__dirname, 'source/constants'),
            layouts: path.join(__dirname, 'source/layouts'),
            routes: path.join(__dirname, 'source/routes'),
            styles: path.join(__dirname, 'source/styles'),
            'ui-kit': path.join(__dirname, 'source/ui-kit'),
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle/main.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            },
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.svg$/, loader: '@svgr/webpack' },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', postCssLoader],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', postCssLoader, 'sass-loader'],
                exclude: /\.module\.scss$/,
            },
            {
                test: /\.module\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: isDevelopment
                                    ? '[path]-[local]--[hash:base64:5]'
                                    : '[local]--[hash:base64:5]',
                            },
                            sourceMap: isDevelopment,
                        },
                    },
                    postCssLoader,
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'templates', 'index.html'),
            favicon: path.join(__dirname, 'templates', 'favicon.png'),
        }),
    ],
    devServer: {
        port: 3000,
        host: '0.0.0.0',
        disableHostCheck: true,
        sockPort: 80,
        proxy: {
            // proxy URLs to backend development server
            //   '/api': 'http://localhost:3200'
        },
        contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
    },
};

export default config;
