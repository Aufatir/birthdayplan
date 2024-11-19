const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Endpoint untuk menerima data POST
app.post('/log', (req, res) => {
    const data = req.body;
    fs.appendFileSync('logs.txt', JSON.stringify(data) + '\n');
    res.send('Data received');
});

// Jalankan server pada port yang ditentukan
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
