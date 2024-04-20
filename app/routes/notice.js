module.exports = (app) => {
    app.get("/noticia", (req, res) => {
        const dbConnect = app.config.dbConnection();
        const noticesModel = app.app.models.noticesModel;

        noticesModel.getNotice(dbConnect, (error, result) => {
            res.render("noticias/noticia", {
                noticia: result,
            });
        });
    });
};