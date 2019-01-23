const express = require('express')
const app = express()
const port = 3002
const fs = require ('fs')

app.get('/',  (req, res) => {
  fs.readFile(`${__dirname}/index.html`, 'utf-8', (err, content) =>{
    res.send(content)
  })
})

//   Handle error 500 - Server Error.

app.use((err, req, res, next) => {
  return res.status(500).send({message: '500 Server Error'});
});

// Handle error 404 - Not Found.

app.use((req, res, next) => {
  res.status(404).send({message: '404. Not Found'});
  next()
});


app.listen(port, () => {
  console.log("Running  on port: 3002")
})
