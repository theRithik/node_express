const express = require('express')
const fs= require('fs')
const app = express()

app.get('/getmovies/:id', (req, res)=>{
    fs.readFile('./data/movies.json',(err, result)=>{
        if(err){
            res.send(err)
        }
        else{
            if(req.params.id){
                const movie= JSON.parse(result)
                for(let i=0; i<movie.length; i++){
                    if(req.params.id === movie[i]._id){
                        res.send(movie[i])
                    }
                    else{
                        console.log(err)
                    }
            }
           
                
            }

           
        }
    })
})
app.listen(4200,()=>{
    console.log('running in 4200')
})