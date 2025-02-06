import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to Render Services API');
});

// Endpoint to get Render services
app.get('/services', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${process.env.RENDER_API_KEY}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch services' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});