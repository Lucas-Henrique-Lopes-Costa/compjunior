const express = require('express');
const rankingController = require('../controllers/ranking.controller');
const { authenticate } = require('../middlewares/auth');

const router = express.Router();

// Todas as rotas requerem autenticação
router.use(authenticate);

router.get('/', rankingController.getGeneral);
router.get('/season/:seasonId', rankingController.getBySeason);

module.exports = router;
