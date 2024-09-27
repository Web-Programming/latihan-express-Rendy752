const http = require('http');
const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('GET request to the homepage');
// });

app.use(express.json());

app.post('/submit', (req, res) => {
  const { name } = req.body;
  res.send(`Hello ${name}`);
});

app.get('/text', (req, res) => {
  res.send('Ini adalah response dengan tipe text');
});

app.get('/html', (req, res) => {
  res.send('<h1>Ini adalah response dengan tipe HTML</h1>');
});

app.get('/json', (req, res) => {
  res.json({ message: 'Ini adalah response dengan tipe JSON' });
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
