const express = require('express');
const router = express.Router();

const { Peserta, Prodi } = require('../models');

router.get('/', async (req, res) => {
    const peserta = await Peserta.findAll({
        include: [
            {model: Prodi, as: 'Prodi'}
        ]
    });
    res.json({
        status: 'success',
        data: peserta,
    });
});

module.exports = router;