const express = require('express')
const router = express.Router()
const trdcontroller = require('../../controllers/api/trd')

//const validate = require('../../../middlewares/validation')
//const validators = require('../../../validations/trd.validator')

// รายการทั้งหมด
router.get('/all', trdcontroller.all)

// สร้างรายการ
//router.post('/create', controller.postCreate)
// อัพเดทรายการ
//router.post('/update/:id',controller.postUpdate)
// ลบรายการ
//router.delete('/del/:id', controller.delete)

module.exports = router


