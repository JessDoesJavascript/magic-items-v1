
const express = require('express');
const path = require('path');
const cors = require('cors');



const app = express();



const port = process.env.PORT || 5000


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use(cors());
app.use(express.json())
app.listen(port, () => console.log("Backend server live on " + port));