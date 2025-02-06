import express from 'express';  // Import express
import axios from 'axios';  // Import axios for HTTP requests
import dotenv from 'dotenv';  // Import dotenv for environment variables

dotenv.config();  // Load environment variables

const app = express();  // Create express app
const port = process.env.PORT || 3000;  // Set port from env variable or default to 3000

// Endpoint to get Render services
app.get('/services', async (req, res) => {
    try {
        // Make API request to Render with Authorization header
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${process.env.RENDER_API_KEY}`  // API key from env variable
            }
        });
        
        res.json(response.data);  // Return services data as JSON
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch services' });  // Handle errors
    }
});

// Start server on specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
