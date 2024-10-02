var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Beranda' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Tentang Kami' });
});

router.get('/kontak', function (req, res, next) {
  res.render('contact', {
    title: 'Hubungi Kami',
    name: 'Rendy Pratama',
    email: 'rendypratama752@gmail.com',
  });
});

module.exports = router;
