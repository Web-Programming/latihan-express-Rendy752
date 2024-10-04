var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('home', { title: 'Beranda Pariwisata Web' });
});

router.get('/paketwisata', function (req, res, next) {
  res.render('paketwisata', {
    title: 'Paket Wisata',
    paketWisata: [
      {
        id: 1,
        nama: 'Paket Wisata 1',
        harga: 1000000,
        deskripsi:
          'Paket wisata 1 adalah paket wisata yang menawarkan pengalaman berwisata yang luar biasa.',
      },
      {
        id: 2,
        nama: 'Paket Wisata 2',
        harga: 25000,
        deskripsi:
          'Paket wisata 2 adalah paket wisata yang menawarkan pengalaman berwisata yang luar biasa.',
      },
    ],
  });
});

router.get('/orderpaket', function (req, res, next) {
  res.render('orderpaket', {
    title: 'Pemesanan Paket Wisata',
  });
});

router.post('/orderdetail', function (req, res, next) {
  res.render('orderdetail', {
    title: 'Detail Pemesanan Paket Wisata',
  });
});

module.exports = router;
