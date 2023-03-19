const express= require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.get('/getmovie',(req, res)=>{
    fs.readFile('./data/movies.json', 'utf8', (err,data)=>{
        if(err){
            console.log(err)
        }
      

app.listen(3000)
