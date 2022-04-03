require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening to htto://localhost:${PORT}`));

app.get('/', (req,res) => {
    res.status(200).send(`Route is on`)
})