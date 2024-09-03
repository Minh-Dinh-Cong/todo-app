
const express = require('express')
const app = express();
const cors = require('cors')
const port = 5000;

app.use(express.static('./public'));


// app.use(errorHandlerMiddleware);
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
