
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

  let result = client.db('Newdatabase').collection('customer').insertOne({
    name: 'Ronny Kessler',
    city: 'Overland Park',
    avatar: ' https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirhttps://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/836.jpgLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1195.jpg',
    pass: '$2a$10$sJ2lMjdUrUfDOdSrEtaTbukfB4Juh2/2WHDwiU9qM.FnGLdcPGepm',
  })

  console.log('inserted 1 document', result);

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
