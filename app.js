const express = require("express");
const path = require("path");

const app = express();
const port = 8000;



// Express specific stuff

app.use('/static'. express.static('static'))  // for serving static files
app.use(express.urlencoded());



// pug specific stuff

app.set('view engine', 'pug')   // set the template engine as pug 
app.set('views', path.join(__dirname, 'views'))   // set the views directory


//endpoints

app.get('/', (req, res)=>{
    
    const params = {}
    res.status(200).render('index.pug', params);
})


// start the server

app.listen(port,()=>{
     console.log(`the application started sucessfully on port ${port}  `);
});