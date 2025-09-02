const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    message: 'Paywise Router is running',
    status: 'success',
    port: port,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
