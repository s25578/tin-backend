function i18nMiddleware(req, res, next) {
    let lang = req.query.lang || req.cookies.lang || 'en';
    req.setLocale(lang);
    res.cookie('lang', lang, { maxAge: 900000, httpOnly: true });
    next();
}

module.exports = i18nMiddleware;
