import express from 'express';
import UserController from '../controllers/user.controller';
import { UsersMockRepository } from '../repository/users-mock-repository';

const repository = new UsersMockRepository();
const controller = new UserController(repository);

const router = express.Router();

router.post('', (req, res) => {
  try {
    return res.json(controller.addItem(req.body));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('', (_, res) => {
  return res.json(controller.getAllItems());
});

router.get('/:id', async (req, res) => {
  try {
    return res.json(controller.getElementById(req.params.id));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/find/:firstname', async (req, res) => {
  try {
    return res.json(controller.findUserByFirstName(req.params.firstname));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    return res.json(controller.deleteItem(req.params.id));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    return res.json(controller.updateItem(req.params.id, req.body));
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
