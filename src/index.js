const express = require('express');
const auth = require('./routes/auth');
const app = express();


const { config } = require('./config');
const platziStore = require('./routes')

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.use(express.json());
auth(app);
platziStore(app);

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});