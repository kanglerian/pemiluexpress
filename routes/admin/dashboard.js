const express = require('express');
const router = express.Router();

const {
    Pemilihan, Paslon, Peserta
} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const jumlah = await Pemilihan.findAll({
            where: {
                paslon_id: 7
            }
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
            jumlah: jumlah,
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