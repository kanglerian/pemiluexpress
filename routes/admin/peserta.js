const express = require('express');
const router = express.Router();
const { body, validationResult, check} = require('express-validator');

const {
    Peserta,
    Prodi
} = require('../../models');

router.get('/', async (req, res) => {
    const session_store = req.session;
    try {
        const prodi = await Prodi.findAll();
        const peserta = await Peserta.findAll({
            include: [{
                model: Prodi,
                as: 'Prodi'
            }],
        });
        res.render('pages/peserta/index', {
            layout: 'layouts/dashboard',
            title: 'Peserta',
            data: peserta,
            prodi: prodi,
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
    const validation = await Peserta.findOne({
        where: {
            nim: req.body.nim
        }
    });
    if(validation !== null){
        req.flash('msg','Gagal, NIM sudah terdaftar.');
        req.flash('status','danger');
        res.redirect('back');
    }else{
        await Peserta.create(req.body);
        req.flash('msg','Data berhasil ditambahkan.');
        req.flash('status','success');
        res.redirect('back');
    }
});

router.patch('/update', async (req, res) => {
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

router.delete('/hapus', async (req, res) => {
    try {
        await Peserta.destroy({
            where: {
                id: req.body.id
            }
        });
        setTimeout(() => {
            res.redirect('back');
        }, 1000);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;