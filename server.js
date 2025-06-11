const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const targetUrl = 'https://deloittettdev.deloitte.gr';


// Proxy all requests to the target URL
const https = require('https');

const axios = require('axios');

app.use('/', async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `${targetUrl}${req.url}`,
      headers: req.headers,
      data: req.body,
    });

    res.status(response.status).set(response.headers).send(response.data);
  } catch (error) {
    console.error('Error during request:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Redirect server listening on port ${port}`);
});
