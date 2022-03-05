const express = require('express');
const app = express();

const port = 3000;

app.get('/user', (req, res) => {
  res.json([{
    id: 1,
    name: "Taro"
  }, {
    id: 2,
    name: "Jiro"
  }]);
});

app.listen(port, () => console.log(`Server running on port ${port}`));