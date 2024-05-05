module.exports.getNotices = (app, req, res) => {
    const dbConnect = app.config.dbConnection();
    const noticesModel = new app.app.models.NoticesDAO(dbConnect);

    noticesModel.getNotices((error, result) => {
        res.render("noticias/noticias", {
            notices: result,
        });
    });
}

module.exports.getNotice = (app, req, res) => {
    const dbConnect = app.config.dbConnection();
    const noticesModel = new app.app.models.NoticesDAO(dbConnect);

    let id = req.query;

    noticesModel.getNotice(id, (error, result) => {
        res.render("noticias/noticia", {
            notice: result,
        });
    });
}