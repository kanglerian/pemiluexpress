const express = require('express');
const router = express.Router();

const {
    Paslon, Peserta
} = require('../models');

router.get('/', async(req, res) => {
    try {
        const paslon = await Paslon.findAll({
            include: [
                {model: Peserta, as: 'Ketua'},
                {model: Peserta, as: 'Wakil'}
            ]
        });
        res.json({
            status: 'success',
            data: paslon
        });
    } catch (error) {
        console.log(error);
    }
});

router.patch('/', async(req, res) => {
    try {
        await Paslon.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        res.json({message: `Data ${req.body.id} telah diupdate`});
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async(req, res) => {
    try {
        await Paslon.create(req.body);
        res.json({message: `Data Paslon telah disimpan.`});
    } catch (error) {
        console.log(error);
    }
});

router.delete('/', async(req, res) => {
    try {
        await Paslon.destroy({
            where: {
                id: req.body.id
            }
        });
        res.json({message: `Data paslon ${req.body.id} telah dihapus.`});
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;