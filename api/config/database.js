const mongoose = require("mongoose");
const username = "mandvi20";
const password = "GZrkZ5MEN68cEzIC";
const cluster = "cluster0";
const uri = "mongodb+srv://"+username+":"+password+"@"+cluster+".difvk4l.mongodb.net/Travel?retryWrites=true";
mongoose.connect(
  uri, 
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to Cluster0 MongoDB");
});
