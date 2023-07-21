// Code Fidal

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const users = [
  { username: 'admin', password: 'admin' },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const user = users.find((user) => user.username === username && user.password === password);
  
  if (user) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, error: 'Invalid username or password.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
