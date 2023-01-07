const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('static'))
app.use(urlencoded());

// ENDPOINTS 
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname+'/views/40.html'));
})
    
// Listening to server
app.listen(port,()=>{
    console.log("THisis working ");
})
