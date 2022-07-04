const express = require('express');
const router = express.Router();

const {
    Pemilih
} = require('../../models');

router.get('/', async (req, res) => {
    const session_store = req.session;
    try {
        const pemilih = await Pemilih.findAll();
        res.render('pages/pemilih/index',{
            layout: 'layouts/dashboard',
            title: 'Pemilih',
            data: pemilih,
            url: req.originalUrl,
            user: session_store
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
                no_identitas: req.body.no_identitas
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
                no_identitas:req.body.no_identitas
            }
        });
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;