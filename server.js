const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;

const targetUrl = 'https://deloittettdev.deloitte.gr';

// Proxy middleware configuration
app.use(
  '/',
  createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    secure: false, // Bypass certificate validation
    onProxyReq: (proxyReq, req) => {
      console.log(`Proxying request to: ${targetUrl}${req.url}`);
      console.log(`Request Method: ${req.method}`);
    },
    onProxyRes: (proxyRes) => {
      console.log(`Response Status: ${proxyRes.statusCode}`);
    },
    onError: (err, req, res) => {
      console.error('Error during proxying:', err.message);
      res.status(500).send('Internal Server Error');
    },
  })
);

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
