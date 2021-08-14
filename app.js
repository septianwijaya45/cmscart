const express   = require('express');
const path      = require('path');
const mongoouse = require('mongoose');
const { url }    = require('./config/database');

// ***** Connect The MongoDB ***** //
mongoouse.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoouse.connection;
db.on('error', console.log.bind(console, 'Connection error: '));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// ***** Init App ***** //
const app = express();

// View Engine SetUp
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ***** Set Public Folder ***** //
app.use(express.static(path.join(__dirname, 'public')));

// router
const pages = require('./routes/pages');
const adminPages = require('./routes/admin_pages');

app.use('/admin/pages', adminPages);
app.use('/', pages);

// ***** Start the server *****/
const port = 3000;
app.listen(port, () =>{
    console.log(`Server is running in port http://localhost:${port}`);
})