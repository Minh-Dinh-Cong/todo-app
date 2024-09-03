
const express = require('express')
const app = express();
const tasks = require("./routers/task");
const users = require("./routers/users");
const connectDb = require('./db/connect');
require('dotenv').config();
const notfound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorhandle');
const cors = require('cors')
const port = 3000;

app.use(express.json());
const corsOptions = {
    origin: ['http://localhost:5000', "http://localhost"],
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
// app.use(express.static('./public'));


// Routes
app.use('/api/v1/tasks', tasks);
app.use('/api/v1/users', users);
app.use(notfound);
// app.use(errorHandlerMiddleware);
const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Example app listening on http://localhost:${port}`)
        })
    }
    catch (error) {
        console.log(error);
    }
}
start();
