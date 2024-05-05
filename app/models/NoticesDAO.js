class NoticesDAO {
    constructor(connection) {
        this._connection = connection;
    }
    getNotices(callback) {
        this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC', callback);
    }
    getNotice(id, callback) {
        this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + id.id_noticia, callback);
    }
    saveNotice(body, callback) {
        this._connection.query('INSERT INTO noticias SET ? ', body, callback);
    }
    getLastNotices(callback) {
        this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback);
    }
}


module.exports = () => {
    return NoticesDAO;
}