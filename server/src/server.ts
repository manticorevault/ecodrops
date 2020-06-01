import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('Listagem de users');

  res.json(['Diego', 'Artur', 'Cleitao', 'Jurema', 'Ileana']);
});

app.listen(3333);
