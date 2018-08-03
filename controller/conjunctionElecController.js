const db = require('../models')

module.exports={
  createElecConjunction:(req,res)=>{
    db.ElectionUser.create({
      UserId : req.body.UserId,
      ElectionId : req.body.ElectionId
    })
    .then((value)=>{
      res.status(200).json({
        message:'berhasil mendaftar di election',
        value
      })
    })
    .catch((err)=>{
      res.status(400).json({
        message:'gagal gabung ke election',
        err
      })
    })
  },
  deleteElecConjunction:(req,res)=>{
    db.ElectionUser.destroy({where:{
      UserId: req.body.UserId , ElectionId : req.body.ElectionId
    }})
    .then((value)=>{
      res.status(200).json({
        message:'berhasil delete data election conjunction',
        value
      })
    })
    .catch((err)=>{
      res.status(400).json({
        message:'gagal delete data election',
        err
      })
    })
  }
}
