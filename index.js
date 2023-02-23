const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const BASE_URL = process.env.BASE_URL;

const io = new Server(httpServer, { cors : [{BASE_URL}]});

io.on("connection", (socket) => {
  console.log("a client connected");

  socket.on('sendmsg', (data) => {
    console.log(data);
  })
});

const port = process.env.port || 5000;

const userRouter = require('./routers/userRouter');
const filterRouter = require('./routers/filterRouter');
const utilRouter = require('./routers/util');
const cors = require('cors');


app.use(express.json());
app.use( cors({origin : [{BASE_URL}]}));

// middleware
app.use('/user', userRouter);
app.use('/filter', filterRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));


app.get('/add', (req, res) => {
    res.send('Response from Express!');
});

app.get('/', (req, res) => {
    res.send("Response from express");
});
app.get('/home', (req, res) => {
    res.send('Response from Express Home!');
});

httpServer.listen(port, () => console.log('server started'));
