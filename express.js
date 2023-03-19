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
        else{
            const movie = JSON.parse(data)
            res.send(movie)
        }

app.listen(3000)
