const express = require('express');
const router = express.Router();

const {
    ViewPemilihan
} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const hasil = await ViewPemilihan.findAll();
        res.render('pages/dashboard/index', {
            layout: 'layouts/dashboard',
            title: 'Dashboard',
            data: hasil,
            url: req.originalUrl
        });
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;