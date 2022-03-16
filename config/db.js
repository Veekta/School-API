require('dotenv').config()
const mongoose = require('mongoose')
// const url = process.env.LOCAL_DB
const url = process.env.MONGO_DB
mongoose.connect(url).then(()=>{
    console.log('connected')
}).catch((error)=>{
    console.log(error.message)
})
