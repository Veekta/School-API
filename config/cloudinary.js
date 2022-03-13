const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: 'veekta', 
    api_key: '848884257338194', 
    api_secret: 've94f8Jl09V2oIv9yZgu94X6pYM',
    secure: true
})

module.exports = cloudinary;