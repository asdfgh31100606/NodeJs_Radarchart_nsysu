const express = require('express');
const app = express();
const port = 3000;
app.set('view-engine')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/page2', (req, res) => {
    res.render('page2.ejs')
})
app.get('/result', (req, res) => {
    res.render('result_page.ejs')
})

app.listen(port, () => {
    console.log(`radarchart listening on port ${port}`)
})