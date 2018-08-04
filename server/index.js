const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.get('/tree', (req, res) => {
    res.send({ tree: 'tree there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// localhost:5000