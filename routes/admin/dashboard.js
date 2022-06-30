const express = require('express');
const router = express.Router();

const {
    Pemilihan, Pemilih, Paslon, Peserta
} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const pemilihan = await Pemilihan.findAll({
            include: [
                {model: Pemilih, as: 'Pemilih'},
                {model: Paslon, as: 'Paslon' },
            ]
        });
        const paslon = await Paslon.findAll({
            include: [
                {model: Peserta, as: 'Ketua'},
                {model: Peserta, as: 'Wakil'}
            ]
        });
        res.render('pages/dashboard/index', {
            layout: 'layouts/dashboard',
            title: 'Dashboard',
            data: paslon,
            jumlah: pemilihan,
            url: req.originalUrl
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/tambah', async(req, res) => {
    try {
        await Pemilihan.create(req.body);
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
});

router.patch('/update', async(req, res) => {
    try {
        await Pemilihan.update(req.body, {
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
        await Pemilihan.destroy({
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