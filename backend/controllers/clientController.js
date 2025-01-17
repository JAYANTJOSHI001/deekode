import Client from '../models/Client.js';

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Create a new subscription with the type set to 'newsletter'
    const newSubscription = new Client({
      email,
      type: 'newsletter',  // Add the type field with 'newsletter' value
    });

    // Save the subscription to the database
    await newSubscription.save();

    console.log('New subscription:', email);

    res.status(200).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error('Error subscribing:', error);
    res.status(500).json({ error: 'Failed to subscribe. Please try again.' });
  }
};

export const existingClients = async (req, res) => {
  try {
    const { email, name, phone } = req.body;

    // Validate required fields
    if (!email || !name || !phone) {
      return res.status(400).json({ error: 'Email, name, and phone are required' });
    }

    // Create a new client with the type set to 'existing'
    const newClient = new Client({
      email,
      name,
      phone,
      type: 'existing',  // Mark as 'existing' client
    });

    // Save the client to the database
    await newClient.save();

    console.log('New client added:', email);

    res.status(200).json({ message: 'Client added successfully!' });
  } catch (error) {
    console.error('Error adding client:', error);
    res.status(500).json({ error: 'Failed to add client. Please try again.' });
  }
};


export const getSubscribers = async (req, res) => {
  try {
    const newsletterSubscribers = await Client.find({ type: 'newsletter' });

    if (newsletterSubscribers.length === 0) {
      return res.status(404).json({ message: 'No newsletter subscribers found.' });
    }

    res.status(200).json(newsletterSubscribers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getExistingClients = async (req, res) => {
  try {
    // Fetch clients with type 'existing' from the database
    const existingClients = await Client.find({ type: 'existing' });

    // Check if clients are found
    if (existingClients.length === 0) {
      return res.status(404).json({ error: 'No existing clients found' });
    }

    // Send the list of existing clients as the response
    res.status(200).json(existingClients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ error: 'Failed to fetch clients. Please try again.' });
  }
};

// Update client type
export const updateClientType= async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.body;  // Extract the new type (e.g., 'previous')

    if (!type) {
      return res.status(400).json({ error: 'Type is required' });
    }

    // Update the client in the database
    const updatedClient = await Client.findByIdAndUpdate(id, { type }, { new: true });

    if (!updatedClient) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.status(200).json({ message: 'Client type updated successfully!', updatedClient });
  } catch (error) {
    console.error('Error updating client:', error);
    res.status(500).json({ error: 'Failed to update client type' });
  }
};

// Handle form submission
export const submitContactForm = async (req, res) => {
  try {
    console.log('Form submitted:', req.body);
    const { name, email, phone, message } = req.body;

    const contact = new Client({
      name,
      email,
      phone,
      message,
      type: 'message',
    });

    await contact.save();
    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Failed to submit the form. Please try again.' });
  }
};

// Fetch all submissions (optional: admin feature)
export const getAllSubmissions = async (req, res) => {
  try {
    // Fetch clients with type 'existing' from the database
    const existingClients = await Client.find({ type: 'message' });

    // Check if clients are found
    if (existingClients.length === 0) {
      return res.status(404).json({ error: 'No message found' });
    }

    // Send the list of existing clients as the response
    res.status(200).json(existingClients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ error: 'Failed to fetch clients. Please try again.' });
  }
};
