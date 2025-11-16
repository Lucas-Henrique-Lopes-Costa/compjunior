const express = require('express');
const userController = require('../controllers/user.controller');
const { authenticate, authorize } = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { updateUserSchema } = require('../validators/user.validator');

const router = express.Router();

// Todas as rotas requerem autenticação
router.use(authenticate);

router.get('/me', userController.getMe);
router.get('/', authorize('ADMIN'), userController.getAll);
router.get('/:id', userController.getById);
router.patch('/:id/toggle-status', authorize('ADMIN'), userController.toggleStatus);
router.put('/:id', validate(updateUserSchema), userController.update);
router.delete('/:id', authorize('ADMIN'), userController.delete);

module.exports = router;
