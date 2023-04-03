const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const taskRoutes = require('./Routes/TaksRoutes')


// MIDDLEWARE TO HANDLE JSON DATA
app.use(express.json());

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI).then(
    ()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('MongoDB connected and App listening in port ' + process.env.PORT);
        });
    }
).catch((error)=>{console.log(error)});

// MIDDLEWARES TO HANDLE ROUTES
app.use('/api/tasks', taskRoutes);


