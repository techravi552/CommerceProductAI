
const express= require("express")

const app = express()

app.get("/" , (req , res)=>{
    res.send(" creat the E-commerse API..")
})

app.listen(3000 , ()=>{
    console.log(`start this api http://localhost::${3000}`)
})