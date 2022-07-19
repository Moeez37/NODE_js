const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const route=require('./router/user');
const path=require('path');
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(route);
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});
app.listen(3000);