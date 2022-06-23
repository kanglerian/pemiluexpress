const express = require('express');
const router = express.Router();

const {
    Peserta,
    Prodi
} = require('../models');

router.get('/', async (req, res) => {
    try {
        const peserta = await Peserta.findAll({
            include: [{
                model: Prodi,
                as: 'Prodi'
            }],
        });
        res.json({
            status: 'success',
            data: peserta,
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const peserta = await Peserta.findOne({
            include: [{
                model: Prodi,
                as: 'Prodi'
            }],
            where: {
                id: req.params.id
            }
        });
        res.json({
            status: 'success',
            data: peserta,
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async(req, res) => {
    try {
        await Peserta.create(req.body);
        res.json({message: `Data baru telah disimpan.`});
    } catch (error) {
        console.log(error);
    }
});

router.patch('/', async(req, res) => {
    try {
        await Peserta.update(req.body, {
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
        await Peserta.destroy({
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