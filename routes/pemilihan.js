const express = require('express');
const router = express.Router();

const {
    Pemilihan, Pemilih, Paslon
} = require('../models');

router.get('/', async (req, res) => {
    try {
        const pemilihan = await Pemilihan.findAll({
            include: [
                {model: Pemilih, as: 'Pemilih'},
                {model: Paslon, as: 'Paslon'},
            ]
        });
        res.json({
            status: 'success',
            data: pemilihan,
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async(req, res) => {
    try {
        await Pemilihan.create(req.body);
        res.json({message: `Data baru telah disimpan.`});
    } catch (error) {
        console.log(error);
    }
});

router.patch('/', async(req, res) => {
    try {
        await Pemilihan.update(req.body, {
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
        await Pemilihan.destroy({
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