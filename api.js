const express = require('express');

const app = express();
app.use(express.json());


const carRoute = require('./carRoute');
const expectedDelivery = require('./expectedDelivery');
const oldExpectedDelivery = require('./oldExpectedDelivery');

app.post('/carRoute', (req, res) => {
  const { longitude, latitude, name } = req.body;
  const result = carRoute.processData(longitude, latitude, name);
  res.json(result);
});

app.post('/expectedDelivery', (req, res) => {
  const { DateTime, name } = req.body;
  const result = exppectedDelivery.processData(DateTime, name);
  res.json(result);
});

app.post('/oldExpectedDelivery', (req, res) => {
  const { DateTime, name } = req.body;
  const result = oldExpectedDelivery.processData(DateTime, name);
  res.json(result);
});

app.listen(3000, () => {
  console.log('API server is running on port 3000');
});
