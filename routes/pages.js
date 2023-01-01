const express = require('express');
const router = express.Router();
const path = require('path');
const connection = require('../public/js/back/mysql.js');

// 정적파일을 사용할 수 있도록 폴더 로드해주기 (해주지 않으면 css, js파일과 연결 x)
router.use(express.static('public'));

router.get('/intro', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'intro.html'));
});

router.get('/foods', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'foods.html'));
});

router.get('/signUp', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'signUp.html'));
});

module.exports = router;