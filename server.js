const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Home!');
});


app.get('/about', (req, res) => {
    res.send('About!');
});

  
app.get('/contact', (req, res) => {
    res.send('Contact!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});