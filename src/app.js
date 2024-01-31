const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const i18n = require('i18n');
const cookieParser = require('cookie-parser');
const formRoutes = require('./routes/formRoutes');
const i18nMiddleware = require('./middlewares/i18nMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

i18n.configure({
    locales: ['en', 'es'],
    directory: path.join(__dirname, 'i18n'),
    defaultLocale: 'en',
    cookie: 'lang',
    queryParameter: 'lang'
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(i18n.init);
app.use(i18nMiddleware);

app.get('/', (req, res) => {
    res.render('index', { data: {} });
});


// for task a
// app.get('/static', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'static.html'));
// });

app.use(formRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app;
