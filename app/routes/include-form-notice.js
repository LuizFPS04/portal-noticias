module.exports = (app) => {
    app.get('/include-form', (req, res) => {
        res.render('admin/form_add_noticia')
    });
}