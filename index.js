const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.sendFile("index.html")
})

app.listen(3000, (err) => {
    if(err){
        console.log("serviço indisponível!")
    }else{
        console.log("serviço rodando!")
    }
})