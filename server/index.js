const bodyParser = require ('body-parser');
const express = require ('express');
const massive = require ('massive');
const cc = require ('./controllers/CardController')

require ('dotenv').config()
const app = express()
app.use(bodyParser.json())
const {CONNECTION_STRING, SERVER_PORT} = process.env

massive(CONNECTION_STRING).then( db =>{
    app.set('db', db)
    console.log('db is connected')
})



app.get('/api/cards', cc.getCards)






app.listen(SERVER_PORT, ()=> {
    console.log('listening on', SERVER_PORT)
})