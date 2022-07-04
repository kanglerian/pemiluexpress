const express = require('express');
const router = express.Router();

const {
    Paslon, Peserta, Prodi
} = require('../../models');

router.get('/', async(req, res) => {
    const session_store = req.session;
    try {
        const paslon = await Paslon.findAll({
            include: [
                {model: Peserta, as: 'Ketua'},
                {model: Peserta, as: 'Wakil'}
            ]
        });
        const peserta = await Peserta.findAll({
            include: [{
                model: Prodi,
                as: 'Prodi'
            }],
        });
        res.render('pages/paslon/index',{
            layout: 'layouts/dashboard',
            title: 'Paslon',
            data: paslon,
            peserta: peserta,
            url: req.originalUrl,
            user: session_store
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/tambah', async(req, res) => {
    try {
        await Paslon.create(req.body);
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
});

router.patch('/update', async(req, res) => {
    try {
        await Paslon.update(req.body, {
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
        await Paslon.destroy({
            where: {
                id: req.body.id
            }
        });
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;