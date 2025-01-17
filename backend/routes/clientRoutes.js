import express from 'express';
import { subscribeNewsletter, getSubscribers, getExistingClients, existingClients, updateClientType, submitContactForm, getAllSubmissions} from '../controllers/clientController.js';

const router = express.Router();

router.post('/subscribe', subscribeNewsletter);
router.get('/subscribe', getSubscribers);
router.post('/existing', existingClients);
router.get('/existing', getExistingClients);
router.put('/shift/:id', updateClientType);
router.post('/message', submitContactForm);
router.get('/message', getAllSubmissions);

export default router;
