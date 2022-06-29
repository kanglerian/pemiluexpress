const express = require('express');
const router = express.Router();

const {
  Prodi
} = require('../../models');

router.get('/', async (req, res) => {
  try {
    const prodi = await Prodi.findAll();
    res.render('pages/prodi/index',{
      layout: 'layouts/dashboard',
      title: 'Program Studi',
      data: prodi
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
    console.log(error);
  }
});

module.exports = router;