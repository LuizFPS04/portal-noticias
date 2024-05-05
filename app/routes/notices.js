module.exports = (app) => {
    app.get("/noticias", (req, res) => {
        app.app.controllers.notices.getNotices(app, req, res);
    });

    app.get("/noticia", (req, res) => {
        app.app.controllers.notices.getNotice(app, req, res);
    });
};