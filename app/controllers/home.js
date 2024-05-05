module.exports.home = (app, req, res) => {

    const dbConnect = app.config.dbConnection();
    const noticesModel = new app.app.models.NoticesDAO(dbConnect);

    noticesModel.getLastNotices((error, result) => {
        res.render('home/index', { notices: result });
    });
}