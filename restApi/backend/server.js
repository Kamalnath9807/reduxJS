const routers = require('./router/router');
const userRouters = require('./router/userRouters');
const colors = require('colors');
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', routers);
app.use('/api/userauth', userRouters);
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
