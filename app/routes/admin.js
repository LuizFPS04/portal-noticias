module.exports = (app) => {
    app.get('/include-form', (req, res) => {
        app.app.controllers.admin.includeForm(app, req, res);
    });

    app.post('/noticias/salvar', (req, res) => {
        app.app.controllers.admin.noticeSave(app, req, res);
    });
}