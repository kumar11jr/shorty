const express = require('express');

const app = express();

app.get('/',(req:any, res:any) => {
  res.send('Hello Prabhat lodu');
})

app.listen(8080);
