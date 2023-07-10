const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {ObjectId} = require('mongodb');
const calculatorRoutes = require('./calculatorRoutes');
const path = require('path');
const app = express();
const port = 3000;


// Serve static files
app.use(express.static("public"));

// Root URL handler
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
console.log("Middleware configured successfully.");

// Connect to MongoDB
console.log("Connecting to MongoDB...");
require('./db');

// Start the server
console.log(`Starting the server on port ${port}...`);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Routes
console.log("Setting up routes...");
app.use('/api/calculator/calculate', calculatorRoutes);
console.log("Routes configured successfully.");

app.get('/data', (req,res) =>{
  let data =[]
  db.collection('data')
  .find() 
  .sort()
  .forEach(data => data.push(data))
  .then(() => {
    res.status(200).json(data)
  })
  .catch(() =>{
    res.status(500).json({error: 'could not fetch the documents'})
  })

app.get('/data/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)){
    db.collection('data)
      .findOne({_id:ObjectId(req.parrams.id)})
      .then(doc =>{
        res.status(200).json(doc)
      })
      .catch(err => {
        res.status(500).json({error: 'could not fetch the documents'})
    })
                  }
  else {
    res.status(500).json({error: 'Not a valid doc id'})
  }
    })
app.post('/data, req, res) => {   
  const para = req.body

  db.collection('data')
    .insertOne(para)
    .then(answer => {
      res.status(201).json(answer)
    })
  .catch(err => {
    res.status(500).json({error: 'could not create a new document'})
  })
})
