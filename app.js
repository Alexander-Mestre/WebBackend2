const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs'); //set up view engine
app.set('views', 'views'); //where views are to be found

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bookRoutes = require('./routes/books');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use('/books', bookRoutes.routes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
