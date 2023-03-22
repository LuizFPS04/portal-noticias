const app = require('./config/server')

const notices = require('./app/routes/notices')(app);
const home = require('./app/routes/home')(app);
const includeForm = require('./app/routes/include-form-notice')(app);

app.listen(3000, () => {
    console.log("Server is running with Express in PORT 3000...")
});