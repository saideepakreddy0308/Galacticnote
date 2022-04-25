const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
// import req from 'express/lib/request'
// const mongoose = require("mongoose");
const connecttomongo = require('./db')
const port = process.env.PORT || 3000;
// require("dotenv").config();
// importing files
// const routes = require('./routes');
// const authRoute = require('./routes/auth');
// const notesRoute = require('./routes/notes');

connecttomongo()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(router);
<Router basename={process.env.PUBLIC_URL}></Router>
// app.use('/', routes);


// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

//heroku
if(process.env.NODE_ENV == "production"){
  // relative path to build folder in react app
  app.use(express.static(path.join(__dirname + "/client/build")));
  // app.use(express.static("client/build"));
  // relative path to index.html file in react app
  const path = require('path');
  app.get("*",(req, res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}

// route production 
app.use("/", require('./routes/baseRoute'));

app.listen(port, () => {
  console.log(`galacticnote-backend listening at http://localhost:${port}`)
})

