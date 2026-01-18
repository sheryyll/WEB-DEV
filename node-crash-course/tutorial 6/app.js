const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);
// middleware & static files
app.use(express.static('public'));

// app.use((req, res, next) => {
//     console.log('new request is made: ');
//     console.log('host: ', req.hostname);
//     console.log('apth: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });
app.use(morgan('dev')); // for logging


app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    // res.sendFile('./views/index.html', {root: __dirname});
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', { title: 'About' });
});

// // redirecting
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
})

// 404
app.use((req, res) => {
    // res.status(404).res.sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', { title: 'Error' });
})