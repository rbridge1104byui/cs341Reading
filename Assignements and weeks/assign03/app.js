const express = require ('express');
const path= require('path');

const defaultRoutes = require('./routes/default');
const userRoutes = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(userRoutes);
app.use(defaultRoutes);
app.listen(3000);