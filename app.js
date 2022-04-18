const express = require("express");
const request = require('request')
const path = require('path')
const hbs = require('hbs')
const app = express();
const port = process.env.PORT || 9000;
const viewsPath = path.join(__dirname, './views')

app.use(express.static(viewsPath))
app.set('view engine', 'hbs');
app.set('views', viewsPath)




app.get('/', (req, res) => {
    const url = 'https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=702e9ad75b684b2ba13de7a0b5cf6ba3'
    request({ url, json: true }, (error, response) => {
        //console.log(response.body.articles)
        res.render('news', {
            title: 'All news',
            data: response.body.articles
        })
        console.log(data)
    })
})


app.listen(port, () => {
    console.log("server  is running", port)
})
