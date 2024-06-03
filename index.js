const express = require('express');
require('dotenv').config()
const app = express()

const artocaleRouter = require('./routes/articles.js')

app.set('view engine', 'ejs')

app.use('/articles', artocaleRouter)

// app.get('/',(req,res)=>{
//     const articles = [{
//         title:'test Article',
//         createdAt:Date.now(),
//         description: ' test des'
//     }]
// })

const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is running on port ${port}🎃`);
})

