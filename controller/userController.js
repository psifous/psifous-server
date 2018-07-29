const db = require('../models')

module.exports = {
  register : (req,res)=>{
    db.User.create({
      email : req.body.email,
      first_name : req.body.first_name,
      last_name:req.body.last_name,
      password : req.body.password
    })
    .then((value)=>{
      res.status(200).json({
        message: ' berhasil buat user baru',
        value
      })
    })
    .catch((err)=>{
      res.status(400).json({
        message: 'email sudah didaftar',
        err
      })
    })
  },

  getAllUser : (req,res)=>{
    db.User.findAll()
    .then((value)=>{
      res.status(200).json({
        message: 'kirim semua data',
        value
      })
    })
    .catch((err)=>{
      res.status(400).json({
        message: 'terjadi kesalahan saat mengambil data user'
      })
    })
  },

  getUserById : (req,res)=>{
    db.User.findOne({
      where:{
        id: req.params.id
      },
      include:[
        db.Community
      ]
    })
    .then((value)=>{
      res.status(200).json({
        message: ' berhasil kirim data personal',
        value
      })
    })
    .catch((err)=>{
      res.status(400).json({
        message: 'terjadi kesalahan saat mengambil data user satuan'
      })
    })
  },

  editData : (req,res)=>{
    db.User.update(
      req.body,{where:{id:req.params.id}}
    )
    .then((value)=>{
      res.status(200).json({
        message:'berhasil update data',
        value
      })
      .catch((err)=>{
        res.status(400).json({
          message: 'terjadi kesalahan saat mengupdate data'
        })
      })
    })
  },

  deleteData : (req,res)=>{
    db.User.destroy({
      where:{
        id:req.params.id
      }
    })
    .then((value)=>{
      res.status(200).json({
        message: 'berhasil delete data',
        value
      })
    })
    .catch((err)=>{
      res.status(400).json({
        message: 'gagal delete data'
      })
    })
  }
}