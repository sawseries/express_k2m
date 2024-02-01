const db = require('../../cores/db');

exports.all = async (req, res) => {
  try {
    const result = await db('EMAREA').select();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } 
};


/*exports.updates = async (req, res) => {
  const id = req.params.id
    try{
      let values = TbTrd.schemas().validateSync(req.body)
      const response = await new TbTrd(values).save()
      res.success({ message: 'update success'})
    }catch(err){
      res.error(err)
    }
};


 exports.postCreate = async (req, res) => {
  try {
    // validate
    let values = TbTrd.schemas().validateSync(req.body)
    // save
    const response = await new TbTrd(values).save()
    res.success({ message: 'Created.', response: response }, 201)
  } catch (err) {
    res.error(err)
  }
};



exports.postUpdate = async (req, res) => {
  const id = req.params.id
  req.assert(id, 400, 'invalid id.')
  
  try{
  
    const trd = await TbTrd.findOneById(id)
    req.assert(trd, 404, `trd id '${id}' not found.`)

    let values = TbTrd.schemas().validateSync(req.body)
    const response = await new TbTrd(values).save()
    res.success({ message: 'Updated.', response: response })

  } catch (err) {
    res.error(err)
  }
};


exports.delete = async (req, res) => {
  const id = req.params.id
  req.assert(id, 400, 'invalid id.')
  try {
    const trd = await TbTrd.findOneById(id)
    req.assert(trd, 404, `trd id '${id}' not found.`)
    // delete by id
    await TbTrd.deleteById(id)
    res.success({ message: 'Deleted.' })
  } catch (err) {
    res.error(err)
  }
};


exports.postAddRetail = async () => {
  try {
    res.success({ message: 'Successfully.' })
  } catch (err) {
    res.error(err)
  }
};


exports.postConfirmRetail = async (req, res) => {
  try {
    let body = req.body
    const trd = await TbTrd.findOneById(body.trd_id)
    req.assert(trd, 404, `trd id '${body.trd_id}' not found.`)

    const retail = await TbRet.findOneById(body.ret_id)
    req.assert(retail, 404, `retail id '${body.ret_id}' not found.`)

    const trdCon = await TbTrdConfirm.findOne(body)

    body = Object.assign(body, { created_by: req.user.id, updated_by: req.user.id })
    let confirmStatus = 'Y' // default is confirm
    if (trdCon) {
      confirmStatus = trdCon.confirm_status === 'Y' ? 'N' : 'Y'
      body = Object.assign({ trd_confirm_id: trdCon.trd_confirm_id, confirm_status: confirmStatus }, body)
    } else {
      body = Object.assign(body, { confirm_status: confirmStatus })
    }
    // validate
    let values = TbTrdConfirm.schemas().validateSync(body)
    // save
    await new TbTrdConfirm(values).save()

    res.success({ message: 'Successfully.' })
  } catch (err) {
    res.error(err)
  }
};


exports.deleteRetail = async (req, res) => {
  const query = req.query
  try {
    const trd = await TbTrd.findOneById(query.trd_id)
    req.assert(trd, 404, `trd id '${query.trd_id}' not found.`)

    const retail = await TbRet.findOneById(query.ret_id)
    req.assert(retail, 404, `retail id '${query.ret_id}' not found.`)

    await TbTrdConfirm.delete(query)
    res.success({ message: 'Deleted.' })
  } catch (err) {
    res.error(err)
  }
};


exports.getProfile = async (req, res) => {

  const trdId = req.params.trd_id
  const userId = req.user.id
  
  try {
    let profile = null
    if (trdId) {
      profile = await tb_trd.findOneById(trdId)
    } else {
      profile = await tb_trd.findOneByUserId(userId)
    }
    res.success(profile)
  } catch (err) {
    res.error(err)
  }
};*/