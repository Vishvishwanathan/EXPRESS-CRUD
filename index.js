const express = require('express')
const app = express()
const PORT = 8000
app.use(express.json())
const data = [{
    name:"Naga",
    email:"naga@gmail.com",
    username:"raj2710",
    password:"123",
    status:true
},
{
    name:"Raj",
    email:"raj@gmail.com",
    username:"nag2710",
    password:"120",
    status:true
}]
app.get('/',(req,res)=>{
    try {
        res.status(200).send({
            message:"Data Fetched Successfully",
            data
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
})

app.get('/:id',(req,res)=>{
    try {
        let id = Number(req.params.id)
        if(id<data.length)
        {
            res.status(200).send({
                message:"Data Fetched Successfully",
                data:data[id]
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
})


app.post('/',(req,res)=>{
   try {
        let user = req.body
        data.push(user)
        res.status(200).send({
            message:"Data Saved Successfully"
        })
   } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
   }
})
app.put('/:id',(req,res)=>{
    try {
        let id = Number(req.params.id)
        if(id<data.length)
        {
            data.splice(id,1,req.body)
            res.status(200).send({
                message:"Data Edited Successfully",
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
})

app.delete('/:id',(req,res)=>{
    try {
        let id = Number(req.params.id)
        if(id<data.length)
        {
            data.splice(id,1)
            res.status(200).send({
                message:"Data Deleted Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
})


app.listen(PORT,()=>console.log(`App Listening ${PORT}`))