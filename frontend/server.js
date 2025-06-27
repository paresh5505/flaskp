const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post('http://backend:5000/submit', req.body);
        res.send(response.data);
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});

app.listen(3000, () => console.log('Frontend running on port 3000'));
