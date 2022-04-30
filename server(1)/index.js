const express = require('express')
const mysql = require('mysql2')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'LOGIN'
})

app.get('/', (req, res) =>{
    let sql = 'SELECT * FROM DADOS'
    connection.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
})



app.listen(8080, () => console.log('Rodando...'))