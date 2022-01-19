const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = new express();

app.use('/', serveStatic('../build', { 
  dotfiles: 'ignore',
  extensions: ['html', 'htm'] }
));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
app.listen(81);

