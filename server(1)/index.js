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

app.post('/register', (req, res) => {
    const userName = req.body.nome //userName is the user variable where I insert on the input in App.js == user
    const password = req.body.senha
    const email = req.body.email
    let sql = `INSERT INTO DADOS (nome,email,senha) VALUES (${userName},${email},${password})`
    connection.query(sql, function(err, result){
        if(err) throw err
        console.log(result)
    })
})



app.listen(8080, () => console.log('Rodando...'))