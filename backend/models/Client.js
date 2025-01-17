import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: { type: String},
  email: { type: String, required: true, unique: true },
  phone: { type: String},
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  status: { type: String, enum: ['active', 'inactive', 'pending'], default: 'active' },
  type: { type: String, enum: ['newsletter', 'message', 'previous', 'existing'] },
  createdAt: { type: Date, default: Date.now },
});

const Client = mongoose.model('Client', ClientSchema);
export default Client;
