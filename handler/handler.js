const schoolData = require('../model/model')
const cloudinary = require('../config/cloudinary')
const fs = require('fs')


const Create = async (req, res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        const newSchool = await schoolData.create({
            schoolName :req.body.schoolName,
            schoolLocation: req.body.schoolLocation,
            cloud_id: result.public_id,
            cloud_url: result.secure_url,
            schoolImage: req.file.path
        })
        res.status(201).json({
            status: "success",
            data: newSchool
        })
    }catch (error) {
        res.json({
            status: "fail",
            message: console.log(error)
        })
    }
}
const getAllSchools = async (req, res)=>{
    try {
        const Schools = await schoolData.find()
        res.status(200).json({
            status: "success",
            data: Schools
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: console.log(error.message)
        })
    }
}
const getOneSchool= async (req, res)=>{
    try {
        const id = req.params.id
        const school = await schoolData.findById(id)
        if(!school){
            res.status(404).json({
                status: "fail",
                message: `id ${id} is not valid`
            })
        }
        res.status(200).json({
            status: "success",
            data: school
        })
    } catch (error) {
        res.json(404).json({
            status: "fail",
            message: console.log(error)
        })
    }
}

const updateSchoolData = async (req, res)=>{
    try {
        const id = req.params.id 
        const school = await schoolData.findById(id)
        if(!school){
            res.status(400).json({
                status: "fail"
            })
        }     
        const checker= await cloudinary.uploader.upload(req.file.path)
        const update = await schoolData.findByIdAndUpdate(id, {
            schoolName: req.body.schoolName,
            schoolLocation: req.body.schoolLocation,
            cloud_id: checker.public_id,
            cloud_url:checker.secure_url,
            schoolImage: req.body.schoolImage
               }, {new: true})                       
        res.status(200).json({
            status: "success",
            data: update
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: console.log(error)
        })
    }
}

const deleteSchool = async(req, res)=>{
    try {
        const id = req.params.id
        const school = await schoolData.findByIdAndDelete(id)
        await cloudinary.uploader.destroy(school.cloud_id)
        await fs.unlinkSync(school.schoolImage)
        res.status(204).json({
            status: "deleted"
        })       
    } catch (error) {
        res.status(400).json({
            message: console.log(error)
        })
    }
}

module.exports = {
    Create,
    deleteSchool,
    getAllSchools,
    getOneSchool,
    updateSchoolData
}