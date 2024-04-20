module.exports = () => {
    this.getNotices = (connection, callback) => {
        connection.query('SELECT * FROM noticias', callback);
    };

    this.getNotice = (connection, callback) => {
        connection.query('SELECT * FROM noticias WHERE id_noticia = 1', callback);
    };

    return this;
} 