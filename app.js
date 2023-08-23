require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');

require('dotenv').config();
const app = express();
app.use(express.static('public'));
const PORT = 5000||process.env.PORT;

app.use(expressLayout);
app.set('layout','./layouts/main')
app.set('view engine','ejs');

const connectDB =require('./server/config/db');
connectDB();
app.use('/',require('./server/routes/main'));

app.listen(PORT,()=>{
    console.log("server running ");
})
