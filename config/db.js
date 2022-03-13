const mongoose = require('mongoose')
const url = 'mongodb://localhost/Schools-In-Lagos'

mongoose.connect(url).then(()=>{
    console.log('connected')
}).catch((error)=>{
    console.log(error.message)
})
