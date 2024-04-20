module.exports = (app) => {
    app.get("/noticias", (req, res) => {
        const dbConnect = app.config.dbConnection();
        const noticesModel = app.app.models.noticesModel;

        noticesModel.getNotices(dbConnect, (error, result) => {
            res.render("noticias/noticias", {
                noticias: result,
            });
        });
    });
};