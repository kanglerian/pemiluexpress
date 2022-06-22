const express = require('express');
const router = express.Router();

const {
  Prodi
} = require('../models');

router.get('/', async (req, res) => {
  try {
    const prodi = await Prodi.findAll();
    res.json({
      status: 'success',
      data: prodi,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    await Prodi.create(req.body);
    res.json({
      message: `Data telah disimpan.`
    })
  } catch (error) {
    console.log(error);
  }
});

router.patch('/', async (req, res) => {
  try {
    await Prodi.update(req.body, {
      where: {
        id: req.body.id
      }
    });
    res.json({
      message: `Data ${req.body.id} telah di ubah.`
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete('/', async (req, res) => {
  try {
    await Prodi.destroy({
      where: {
        id: req.body.id
      }
    });
    res.json({
      message: `Data ${req.body.id} telah dihapus.`
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;