const express = require('express');
const session = require('express-session');
const router = express.Router();

const {
  Pemilih
} = require('../models');

router.get('/', (req, res) => {
  res.render('index',{
    layout: 'layouts/auth'
  });
});

router.post('/', async (req, res) => {
  const session_store = req.session;
  if(req.body.no_identitas == '' || req.body.password == ''){
    res.redirect('/');
  }else{
    const hasil = await Pemilih.findOne({
      where: {
        no_identitas: req.body.no_identitas,
        password: req.body.password
      }
    });
    if(hasil == null){
      return res.redirect('/');
    }
    session_store.no_identitas = hasil.no_identitas;
    session_store.nama_lengkap = hasil.nama_lengkap;
    session_store.status = hasil.status;
    session_store.logged_in = true;
    res.redirect('/pemilihan');
  };
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
      if(err){
          alert("Gagal logout!");
      }else{
          res.redirect('/');
      }
  });
});


module.exports = router;
