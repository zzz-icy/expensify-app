// entry -> output
// console.log(__dirname);

const path = require('path');
// console.log(path.join(__dirname, 'public'));
// change to export a function to return webpack conig object
// so that we can have env to do some logic inside
module.exports = (env) => {
    const isProduction = env === 'production';
    // console.log('env', env);
    // env undefined
    // after   "build:prod": "webpack -p --env production"
    // env production


    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'), // has to be absolute
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
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        // source map is taking a lot of the build size
        // but still needed in product
        // can opt for a slow version
        // it's ok of it's slow for production build
        // refer to https://webpack.js.org/configuration/devtool/#devtool
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        // yarn run build:prod, we will get two files
        // bundle.js   708 kB   --core js    
        // bundle.js.map  4.04 MB 
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,  // for all unknown 404 not found, to always serve up index.html file
        }
    };
}


// loader allows you to customize the behavior of webpack when you load some given files
// for example, when webpack sees a JS file or CSS......
// use babel to compile .js to ES6
