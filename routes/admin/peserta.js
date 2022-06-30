const express = require('express');
const router = express.Router();

const {
    Peserta,
    Prodi
} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const peserta = await Peserta.findAll({
            include: [{
                model: Prodi,
                as: 'Prodi'
            }],
        });
        res.render('pages/peserta/index',{
            layout: 'layouts/dashboard',
            title: 'Peserta',
            data: peserta,
            url: req.originalUrl
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/tambah', async(req, res) => {
    try {
        await Peserta.create(req.body);
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
});

router.patch('/update', async(req, res) => {
    try {
        await Peserta.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
});

router.delete('/hapus', async(req, res) => {
    try {
        await Peserta.destroy({
            where: {
                id:req.body.id
            }
        });
        res.redirect('back');s
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;