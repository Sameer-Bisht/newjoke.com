const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('static'))
app.use(urlencoded());

app.set('viewengine','html');
app.set('views',path.join(__dirname,'views'))

// ENDPOINTS 
app.get("/", (req,res)=>{
    res.status(200).render('40.html')
})
    

// Listening to server
app.listen(port,()=>{
    console.log("THisis working ");
})