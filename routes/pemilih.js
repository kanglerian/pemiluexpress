const express = require('express');
const router = express.Router();

const {
    Pemilih
} = require('../models');

router.get('/', async (req, res) => {
    try {
        const pemilih = await Pemilih.findAll();
        res.json({
            status: 'success',
            data: pemilih,
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async(req, res) => {
    try {
        await Pemilih.create(req.body);
        res.json({message: `Data baru telah disimpan.`});
    } catch (error) {
        console.log(error);
    }
});

router.patch('/', async(req, res) => {
    try {
        await Pemilih.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        res.json({message: `Data ${req.body.id} telah diupdate.`});
    } catch (error) {
        console.log(error);
    }
});

router.delete('/', async(req, res) => {
    try {
        await Pemilih.destroy({
            where: {
                id:req.body.id
            }
        });
        res.json({message: `Data ${req.body.id} telah dihapus.`});
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;