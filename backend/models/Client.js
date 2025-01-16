import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  status: { type: String, enum: ['active', 'inactive', 'pending'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
});

const Client = mongoose.model('Client', ClientSchema);
export default Client;
