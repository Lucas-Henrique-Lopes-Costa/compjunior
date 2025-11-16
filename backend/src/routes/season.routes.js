const express = require('express');
const seasonController = require('../controllers/season.controller');
const { authenticate, authorize } = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const {
    createSeasonSchema,
    updateSeasonSchema,
} = require('../validators/season.validator');

const router = express.Router();

// Todas as rotas requerem autenticação
router.use(authenticate);

router.post('/', authorize('ADMIN'), validate(createSeasonSchema), seasonController.create);
router.get('/', seasonController.getAll);
router.get('/active', seasonController.getActive);
router.get('/:id', seasonController.getById);
router.patch('/:id/toggle-active', authorize('ADMIN'), seasonController.toggleActive);
router.put('/:id', authorize('ADMIN'), validate(updateSeasonSchema), seasonController.update);
router.delete('/:id', authorize('ADMIN'), seasonController.delete);

module.exports = router;
