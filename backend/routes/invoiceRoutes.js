const express = require('express');
const { getAllInvoices, createInvoice, updateInvoice, deleteInvoice } = require('../controllers/invoiceController');
const router = express.Router();

router.get('/', getAllInvoices);
router.post('/', createInvoice);
router.put('/:id', updateInvoice);
router.delete('/:id', deleteInvoice);

module.exports = router;