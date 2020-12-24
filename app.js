const express = require('express')
const mongoose=require('./db/mongoose')
const Url=require('./modal/linkdb')

const app=express()


const port=process.env.PORT || 4000

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }))




app.get('/',async(req,res)=>{
   const alldata=await Url.find()
    res.render('index',{shortUrls:alldata})
})

app.post('/short',async(req,res)=>{
    await Url.create({fulllink:req.body.fullUrl})
    
    // await record.save()
    res.redirect('/')
})


app.get('/:shorturl',async(req,res)=>{
    const shorturl=await Url.findOne({shortlink:req.params.shorturl})
    
    if(shorturl==null) res.sendStatus(404)

    shorturl.clickcount++
    shorturl.save()
    res.redirect(shorturl.fulllink)
})

app.listen(port,()=>{
    console.log('app is running on port'+port)
})