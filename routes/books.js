const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

const books = [];

router.get('/add-book',(req, res, next) => {
    res.render('add-book', { 
        pageTitle: 'Books Form', 
        path: '/add-book', // For pug, EJS 
        books: books
    });
});

router.post('/books-display',(req, res, next) => {
    title = req.body.title;
    description = req.body.description;
    books.push({title,description});
    res.render('books-display', { 
        books: books,
        pageTitle: 'Books Display', 
        path: '/books-display', // For pug, EJS 
    });
    
});


exports.routes = router;