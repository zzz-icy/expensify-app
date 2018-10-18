// entry -> output
// console.log(__dirname);

const path = require('path');
const webpack = require('webpack'); // then we have the built-in stuff

// Extract text from a bundle, or bundles, into a separate file.
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// console.log(path.join(__dirname, 'public'));
// change to export a function to return webpack conig object
// so that we can have env to do some logic inside, eg. for devtool

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    // it will look for .env file, eg .env.development
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}
// automatically set on heroku process.env.NODE_ENV
// undefined => development
// we need to set it to test in package.json
// production will be set automatically by Heroku

module.exports = (env) => {
    const isProduction = env === 'production';
    // console.log('env', env);
    // env undefined
    // after   "build:prod": "webpack -p --env production"
    // env production
    const CSSExtract = new ExtractTextPlugin('styles.css');
    // It moves all the required *.css modules in entry chunks into a separate CSS file. So your styles are no longer inlined into the JS bundle, but in a separate CSS file (styles.css). If your total stylesheet volume is big, it will be faster because the CSS bundle is loaded in parallel to the JS bundle.
    return {
        // babel-polyfill will go through the process adding supports for us 
        // we can have multiple entry
        entry: ['babel-polyfill', './src/app.js'],//
        output: {
            path: path.join(__dirname, 'public', 'dist'), // has to be absolute
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,   // file ending with .js
                exclude: /node_modules/
            },
            {

                test: /\.s?css$/,  //s? makes 's' optional
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true, // by default it is false for css-loader
                            }
                        },
                        // 'style-loader', // for inline style, s o won;t use here
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true, // by default it is false for css-loader
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract, // remember to add link in the index.html for styles.css
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            })
        ],
        // source map is taking a lot of the build size
        // but still needed in product
        // can opt for a slow version
        // it's ok of it's slow for production build
        // refer to https://webpack.js.org/configuration/devtool/#devtool

        // when under development, css source mapping won't work, style shows up in styles.css, not the real original position it comes from
        // devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devtool: isProduction ? 'source-map' : 'inline-source-map',

        // yarn run build:prod, we will get two files
        // bundle.js   708 kB   --core js    
        // bundle.js.map  4.04 MB 
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,  // for all unknown 404 not found, to always serve up index.html file
            publicPath: '/dist/'
        }
    };
};


// loader allows you to customize the behavior of webpack when you load some given files
// for example, when webpack sees a JS file or CSS......
// use babel to compile .js to ES6
