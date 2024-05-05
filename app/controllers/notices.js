module.exports.getNotices = (app, req, res) => {
    const dbConnect = app.config.dbConnection();
    const noticesModel = new app.app.models.NoticesDAO(dbConnect);

    noticesModel.getNotices((error, result) => {
        res.render("noticias/noticias", {
            noticias: result,
        });
    });
}

module.exports.getNotice = (app, req, res) => {
    const dbConnect = app.config.dbConnection();
    const noticesModel = new app.app.models.NoticesDAO(dbConnect);

    noticesModel.getNotice((error, result) => {
        res.render("noticias/noticia", {
            noticia: result,
        });
    });
}