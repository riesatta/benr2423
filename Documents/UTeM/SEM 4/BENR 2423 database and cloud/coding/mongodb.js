
const { MongoClient, ServerApiVersion, FindCursor } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.b5mhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
  if (err){
    console.log(err.message)
    return
  }
  console.log("Connected to mongodb");

  client.db('Newdatabase').collection('customer').insertMany([{
    name: 'Garnett Quitzon',
    city: '谢林市',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1141.jpg ',
    pass: '$2a$10$Ys0Q4om8ZmsyiO.iAX3BC.58SnLeNodPvZKNW6jmAerVzpcxk11N6',
  },
  {
    name: 'Anastasia Rowe',
    city: '吉子轩',
    avatar: ' https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1230.jpg',
    pass: '$2a$10$cLCgUP6HgksQylUpfecHduXkzlUdC20r/8PScjNc7KQoKPyTAsqcu',
  }]).then(result => {
    console.log(result);
  });

  //client.db().admin().listDatabases().then(result =>{
  //  console.log(result['databases'][6]);
  //})

  //client.db('sample_training').listCollections().toArray().then(result=>{
  //  console.log(result);
  //})

  //client.db('sample_training').collection('trips').find({'birth year': 1972}).toArray().then(result=>{
  //  console.log(result);
  //})

});
