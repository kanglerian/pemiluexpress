const express = require('express');
const router = express.Router();

const {
    ViewPemilihan
} = require('../../models');

router.get('/', async (req, res) => {
    const session_store = req.session;
    try {
        const hasil = await ViewPemilihan.findAll();
        res.render('pages/dashboard/index', {
            layout: 'layouts/dashboard',
            title: 'Dashboard',
            data: hasil,
            url: req.originalUrl,
            user: session_store
        });
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;