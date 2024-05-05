class NoticesDAO {
    constructor(connection) {
        this._connection = connection;
    }
    getNotices(callback) {
        this._connection.query('SELECT * FROM noticias', callback);
    }
    getNotice(callback) {
        this._connection.query('SELECT * FROM noticias WHERE id_noticia = 1', callback);
    }
    saveNotice(body, callback) {
        this._connection.query('INSERT INTO noticias SET ? ', body, callback);
    }
}


module.exports = () => {
    return NoticesDAO;
}