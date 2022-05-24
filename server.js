const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001

//Middleware => 'express.json()' captures body of request and converts it JSON, 'express.urlencoded({ extended: true })' handle any data that is submitted by a form, 'express.static("public")' set-up routes for everything in public directory. 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//API Routes
app.use('/api', apiRoutes)
app.post('/api/notes', (req,res) => {
    res.json('post!');
});

//HTML Routes => Anything preceded by a '/' will route to htmlRoutes
//Order matters here because '/' is essentially an Else statement, and htmlRoutes contains '*'
app.use('/', htmlRoutes);
 

//Start server on the port  
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));






