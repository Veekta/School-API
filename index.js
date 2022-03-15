require('./config/db')
const express = require('express')
const port = process.env.PORT || 1243
const schoolApp  = express()
const myRoute = require('./route/router')

schoolApp.use(express.json())
schoolApp.use('/api/v1', myRoute)
schoolApp.use('/school-image', express.static('./uploads'))

schoolApp.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})
