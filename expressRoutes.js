const express = require('express');
const app = express();
const cats = [
  {'Johny': 'black and white'}, 
  {'Zoey': 'red and white'},
  {'Mitya': 'grey and black}];
   
 const PORT = process.env.PORT || 4001;
 // Use static server to serve the Express Yourself Website
 app.use(express.static('public'));






const express = require('express');
const app = express();
const { seedElements } = require('./utils');

// Serves Express Yourself website
app.use(express.static('public'));

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

const expressions = [];
seedElements(expressions, 'expressions');

// Get all expressions
app.get('/expressions', (req, res, next) => {
  res.send(expressions);
  // console.log(req);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
