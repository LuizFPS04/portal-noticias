const mysql = require("mysql");

const connectionMySQL = () => {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "admin",
        database: "portal_noticias",
    });
};

module.exports = () => {
    return connectionMySQL;
};
