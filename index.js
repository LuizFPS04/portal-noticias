const app = require('./config/server')

app.listen(3000, () => {
    console.log("Server is running with Express in PORT 3000...")
});