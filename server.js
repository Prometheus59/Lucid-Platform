const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = 3000

//app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT || port);

app.listen(port, () => console.log(`Server listening on port ${port}!`));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
