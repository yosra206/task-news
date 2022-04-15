const request = require("request")
const url = "https://newsapi.org/v2/top-headlines?country=eg&apiKey=702e9ad75b684b2ba13de7a0b5cf6ba3";
// request({ url, json: true }, (erorr, response) => {
//     if (erorr) {
//         console.log("erorr");
//     } else {
//         console.log(response.body.articles)
//     }

// })
request({ url, json: true }, (error, response) => {

        if (error) {
            console.log('Unable to connect  service!')
        } else if (response.body.error) {
            (response.body.error.message)
        } else {
            console.log(response.body.articles)
        }

    })
    // module.exports = news