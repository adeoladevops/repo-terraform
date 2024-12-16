const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Mock data storage
let products = [
    { name: 'Smartwatch A', price: 150 },
    { name: 'Smartwatch B', price: 200 },
];
let cart = [];

// API Endpoints
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.post('/api/products', (req, res) => {
    const { name, price } = req.body;
    products.push({ name, price });
    res.json({ message: 'Product added successfully!', products });
});

app.get('/api/cart', (req, res) => {
    res.json(cart);
});

app.post('/api/cart', (req, res) => {
    const { name, price } = req.body;
    cart.push({ name, price });
    res.json({ message: 'Product added to cart!', cart });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
