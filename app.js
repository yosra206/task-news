const express = require("express");

const path = require('path')
const hbs = require('hbs')
const app = express();
const port = process.env.PORT || 3000;
const viewsPath = path.join(__dirname, './views')

app.use(express.static(viewsPath))
app.set('view engine', 'hbs');
app.set('views', viewsPath)




// app.get('/indexUrl', (req, res) => {
//     res.render('index', {
//         title: req.query.articles.title,
//         description: req.query.articles.description,
//         img: req.query.articles.img

//     })
// })

const news = require('./tools/news')
app.get('/news', (req, res) => {
    if (error) {
        res.send(error)
    } else {
        res.send({
            // news: req.query.articles,
            title: req.query.articles.title,
            description: req.query.articles.description,
            img: req.query.articles.img

        })
    }

})
app.listen(port, () => {
    console.log("server  is running", port)
})