const path = require('path'); // 'path' is built-in
const express = require('express');
const app = express(); // now we have a express application
const publicPath = path.join(__dirname, '..', 'public');  // join up the current directory with the public directory
const port = process.env.PORT || 3000; // process.evn.PORT use whatever heroku provide
app.use(express.static(publicPath));

// the purpose is:
// before this, if we go to create page and refresh, we got 'cannot get /creat'
// before we use node server, we have the following for live-server
// devServer: {
//     historyApiFallback: true,  // for all unknown 404 not found, to always serve up index.html file
// }
// now we want the exactly same
// to match all unmatched routes, and then serve up the same thing index.html

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
// add this for heroku
// "start":"node server/server.js"

app.listen(port, () => {
    console.log('Server is up!');
});
