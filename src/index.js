
const express = require('express')
const app = express()
const port = 3000
const quests = require('../data/quests');
const characters = require('../data/characters');

app.get('/', (req, res) => {
    res.json([{ id: 1, level: 2, minExp: 3, maxExp: 4  }])
})

app.get('/quest', (req, res) => {
  res.json(quests)
})

app.get('/character', (req, res) => {
  res.json(characters)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
