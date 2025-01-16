import mongoose from 'mongoose';

const InvoiceSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['paid', 'pending', 'overdue'], default: 'pending' },
  dueDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Invoice = mongoose.model('Invoice', InvoiceSchema);
export default Invoice;