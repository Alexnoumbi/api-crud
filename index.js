const express = require("express")
const port = 5000

const app = express();


app.use(express.json())
//creation de route
app.get('/',(req, res)=>{
     res.status(200).json(data)})

app.get('/:id', (req, res)=>{
        const{id} = req.params
        const one  = data.find(el =>el.id === +id)
        if(!one) return res.json({message : "not found"})
        res.status(200).json(one)
     })
  
//post
 app.post('/', (req, res)=>{
    const { body }=req
    const newOne ={

        id : data.length + 1,
        ...body
    }
    data.push(newOne)
    res.status(201).json(newOne)
 })

app.listen(port, ()=>{

    console.log("Serveur est en ligne")
})
