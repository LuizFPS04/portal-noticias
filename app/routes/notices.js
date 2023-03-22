module.exports = (app) => {
    app.get('/noticias', (req, res) => {
        const mysql = require('mysql');
        const dbConnect = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'portal'
        });

        dbConnect.query('SELECT * FROM noticias', (error, result) => {
            res.send(result)
        });

        // res.render('noticias/noticia')
    });
}