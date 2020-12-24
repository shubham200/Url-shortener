const mongoose = require('mongoose')
const shortid = require('shortid')


const urlSchema= mongoose.Schema({
    fulllink:{
        type:String,
        required:true,
    },
    shortlink:{
        type:String,
        required:true,
        default:shortid.generate

    },
    clickcount:{
        type:Number,
        required:true,
        default:0
    },
    
})

 module.exports=mongoose.model('Shorturl',urlSchema)