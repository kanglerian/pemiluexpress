const express = require('express');
const router = express.Router();


const {
  Prodi
} = require('../../models');

router.get('/', async (req, res) => {
  const session_store = req.session;
  try {
    const prodi = await Prodi.findAll();
    res.render('pages/prodi/index',{
      layout: 'layouts/dashboard',
      title: 'Program Studi',
      data: prodi,
      url: req.originalUrl,
      user: session_store
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/tambah', async (req, res) => {
  try {
    await Prodi.create(req.body);
    res.redirect('back');
  } catch (error) {
    console.log(error);
  }
});

router.patch('/update', async (req, res) => {
  try {
    await Prodi.update(req.body, {
      where: {
        id: req.body.id
      }
    });
    res.redirect('back');
  } catch (error) {
    console.log(error);
  }
});

router.delete('/hapus', async (req, res) => {
  try {
    await Prodi.destroy({
      where: {
        id: req.body.id
      }
    });
    res.redirect('back');
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;