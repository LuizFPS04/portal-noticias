module.exports.includeForm = (app, req, res) => {
    res.render('admin/form_add_noticia', { validation: "", notice: "" });
}

module.exports.noticeSave = (app, req, res) => {
    const notice = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'A data é obrigatória').notEmpty().isDate({ format: 'YYYY-MM-DD' });
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.render('admin/form_add_noticia', { validation: errors, notice: notice });
        return;
    }

    const dbConnect = app.config.dbConnection();
    const noticesModel = new app.app.models.NoticesDAO(dbConnect);

    noticesModel.saveNotice(notice, (error, result) => {
        res.redirect("/noticias");
    });
}