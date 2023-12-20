// server-node/server.js
const express = require('express');
const app = express();
const port = 5000;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Data from Node.js server' });
});

app.listen(port, () => {
  console.log(`Node.js server is running on port ${port}`);
});
