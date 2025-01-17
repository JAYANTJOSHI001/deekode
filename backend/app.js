import express from 'express';
import mongoose from 'mongoose';
import clientRoutes from './routes/clientRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import invoiceRoutes from './routes/invoiceRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Built-in JSON parser
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data

// Routes
app.use('/api/clients', clientRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/blogs', blogRoutes);

// Database Connection
mongoose
  .connect('mongodb+srv://deekode:Aniket4154@cluster0.631nx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
