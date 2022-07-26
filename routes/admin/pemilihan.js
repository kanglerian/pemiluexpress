const express = require('express');
const router = express.Router();

const {
    Pemilihan, Paslon, Peserta
} = require('../../models');

router.get('/', async (req, res) => {
    const session_store = req.session;
    try {
        const paslon = await Paslon.findAll({
            where: {
                status: 0
            },
            include: [
                {model: Peserta, as: 'Ketua'},
                {model: Peserta, as: 'Wakil'}
            ]
        });
        res.render('pages/pemilihan/index', {
            layout: 'layouts/dashboard',
            title: 'Pemilihan',
            data: paslon,
            url: req.originalUrl,
            user: session_store,
            msg: req.flash('msg'),
            status: req.flash('status'),
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/tambah', async (req, res) => {
    const validation = await Pemilihan.findOne({
        where: {
            pemilih_id: req.body.pemilih_id
        }
    });
    if(validation !== null){
        req.flash('msg','Maaf, anda telah memilih.');
        req.flash('status','danger');
        res.redirect('back');
    }else{
        await Pemilihan.create(req.body);
        req.flash('msg','Terima kasih anda telah memilih.');
        req.flash('status','success');
        res.redirect('back');
    }
});

module.exports = router;