const express = require('express');
const app = express();
const port = 3000

app.get('/usuario', (req, res) => {
    res.send('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')
  })

app.get('/atividade', (req, res) => {
    res.send('Rota ativada com GET e recurso atividade: valores de atividade devem ser retornados')
  })

app.get('/quadro', (req, res) => {
    res.send('Rota ativada com GET e recurso quadro: valores de quadro devem ser retornados')
  })  

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })  