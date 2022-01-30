const express = require('express');
const app = express();
const cats = [
  {'Johny': 'black and white'}, 
  {'Zoey': 'red and white'},
  {'Mitya': 'grey and black}
   ];
   
 const PORT = process.env.PORT || 4001;
 // Use static server to serve the Express Yourself Website
 app.use(express.static('public'));

app.get = ('/cats',(req,res,next)=>{
  res.send(cats);
});

app.listen(PORT,()=>{
  console.log(`Server is listening on ${PORT}`);
});






