const express = require('express');
const checkinController = require('../controllers/checkin.controller');
const { authenticate, authorize } = require('../middlewares/auth');
const upload = require('../utils/upload');

const router = express.Router();

// Todas as rotas requerem autenticação
router.use(authenticate);

router.post('/', upload.single('photo'), checkinController.create);
router.get('/', checkinController.getAll); // Todos podem ver os check-ins
router.get('/my-checkins', checkinController.getMyCheckIns);
router.delete('/:id', authorize('ADMIN'), checkinController.delete); // Apenas admin pode deletar

module.exports = router;
