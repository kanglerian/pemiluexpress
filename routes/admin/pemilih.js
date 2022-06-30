const express = require('express');
const router = express.Router();

const {
    Pemilih
} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const pemilih = await Pemilih.findAll();
        res.render('pages/pemilih/index',{
            layout: 'layouts/dashboard',
            title: 'Pemilih',
            data: pemilih,
            url: req.originalUrl
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/tambah', async(req, res) => {
    try {
        await Pemilih.create(req.body);
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
});

router.patch('/update', async(req, res) => {
    try {
        await Pemilih.update(req.body, {
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
        await Pemilih.destroy({
            where: {
                id:req.body.id
            }
        });
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;