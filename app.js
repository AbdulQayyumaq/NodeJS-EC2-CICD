const express = require('express');
const app = express();
const port = 6600;

app.get('/', (req, res) => {
  res.send('<h1>Express Demo App</h1> <h4>Message: CICD Deployment Successful</h4> <p>Version 1.1 (Second Release - Deployed via CICD)</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
