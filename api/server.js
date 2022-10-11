const express =  require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(express.json({limit: "30mb",extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
  
   useNewUrlParser:true,
   useUnifiedTopology:true,

}); 

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB Connected");
});

//add routes here

const articleRoutes = require("./src/api/routes/article.routes");

app.use("/article",articleRoutes);

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
})


