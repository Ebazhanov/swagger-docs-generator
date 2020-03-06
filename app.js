const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// Routes
app.get('/customers', (req, res) => {
    res.send("Customer results")
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
