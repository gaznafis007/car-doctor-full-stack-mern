const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken')
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser())
require("dotenv").config();

app.get("/", (req, res) => {
  res.send(`car doctor server is running on port: ${port}`);
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zwhzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    const serviceCollection = client
      .db("car-doctor-database")
      .collection("services");

    const bookingCollection = client.db("car-doctor-database").collection("bookings");

    app.get("/services", async (req, res) => {
      const query = {};
      const result = await serviceCollection.find(query).toArray();
      res.send(result);
    });
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = new ObjectId(id);
      const options = {
        projection:{
          title: 1, 
          img:1, 
          price: 1, 
          service_id: 1
        }
      }
      const result = await serviceCollection.findOne(query, options);
      // console.log(id)
      // console.log(result)
      res.send(result);
    });

    app.post("/jwt", async(req,res) =>{
      const data = req.body;
      // console.log(data.email)
      const token = jwt.sign({userEmail: data.email}, process.env.ACCESS_TOKEN, {expiresIn: '1h'});
      console.log(token)
      res.cookie('accessToken', token, {
       httpOnly: true,
       secure: false, 
        sameSite: 'none'
      })
      .send({success: true})

    })

    app.post("/bookings", async(req,res) =>{
      const booking = req.body;
      const result = await bookingCollection.insertOne(booking);
      res.send(result)
    });
    app.get("/bookings", async(req,res) =>{
      const email = req.query.email;
      let query = {};
      if(email){
        query = {email}
      }
      const result = await bookingCollection.find(query).toArray();
      res.send(result)
    })
    app.put("/bookings/:id", async(req,res) =>{
      const id = req.params.id;
      const status = req.body
      const query = {_id : new ObjectId(id)};
      const updatedDoc = {
        $set: {
            status
        }
      }
      const result = await bookingCollection.updateOne(query, updatedDoc);
      res.send(result)
    })
    app.delete("/bookings/:id", async(req,res) =>{
      const id = req.params.id;
      const query = { _id : new ObjectId(id)}
      const result = await bookingCollection.deleteOne(query);
      res.send(result)
    })
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
