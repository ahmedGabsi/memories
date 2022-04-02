import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config'
import posts from "./routes/posts.js"

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); 
app.use('/posts',posts)
const port = process.env.PORT;

const cnx = `mongodb+srv://ahmed:${process.env.DB_PASS}@cluster0.zigl0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
  .connect(cnx)
  .then(() =>
    app.listen(port, () => console.log(`Server running on port : ${port}`))
  )
  .catch((err) => console.log(error));
