import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.send("<html><body>Portal de Notícias</body></html>")
});

app.listen(3000, () => {
    console.log("Server is running with Express in PORT 3000...")
});