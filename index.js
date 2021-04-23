const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/database',{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify:false
}).then(()=>console.log('mongoDB connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 하이여')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})