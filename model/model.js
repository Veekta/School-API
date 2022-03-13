const mongoose = require ('mongoose')

const schoolSchema = mongoose.Schema({
    schoolName:{
        type: String,
        required: true,
        unique: true
    },
    schoolLocation:{
        type: String,
        required: true
    },
    cloud_id:{
        type: String
    },
    cloud_url:{
        type: String
    },
    dateCreated: {
        type: Date,
        default: new Date()
    },
    schoolImage:{
        type: String
    }
})

module.exports = mongoose.model("Schools", schoolSchema)