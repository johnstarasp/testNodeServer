const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/*', (req, res) => {
  const redirectUrl = 'https://deloittettdev.deloitte.gr' + req.originalUrl;
  res.redirect(301, redirectUrl);
});

app.post('/*', (req, res) => {
  const redirectUrl = 'https://deloittettdev.deloitte.gr' + req.originalUrl;
  res.redirect(301, redirectUrl);
});

app.put('/*', (req, res) => {
  const redirectUrl = 'https://deloittettdev.deloitte.gr' + req.originalUrl;
  res.redirect(301, redirectUrl);
});

app.delete('/*', (req, res) => {
  const redirectUrl = 'https://deloittettdev.deloitte.gr' + req.originalUrl;
  res.redirect(301, redirectUrl);
});

app.listen(port, () => {
  console.log(`Redirect server listening on port ${port}`);
});