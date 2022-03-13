const express = require('express')
const router = express.Router()
const {Create, deleteSchool, getAllSchools, getOneSchool, updateSchoolData} = require('../handler/handler')
const imageUploader = require('../multer/multer')


router.route('/school')
      .post(imageUploader, Create)
      .get(getAllSchools)

router.route('/school/:id')
       .delete(deleteSchool)
       .get(getOneSchool)
       .patch(imageUploader, updateSchoolData)
module.exports = router