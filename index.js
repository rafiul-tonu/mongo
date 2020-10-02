const express = require('express');

const cors = require('cors')




const app = express()

app.use(cors())

const users = ['a', 'b', 'c', 'd', 'e', 'f'];

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/users/:id', (req, res) => {
  
  const id = req.params.id;
  const name = users[id];
  console.log(name)
  res.send(name)
})

app.listen(3000, () => console.log('listen'));