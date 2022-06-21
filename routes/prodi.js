const express = require('express');
const router = express.Router();

const { Prodi } = require('../models');

router.get('/', async (req, res) => {
  const prodi = await Prodi.findAll();
  res.json({
    status: 'success',
    data: prodi,
  });
});

module.exports = router;
