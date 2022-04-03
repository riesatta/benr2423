const { MongoClient, ServerApiVersion, FindCursor, ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.b5mhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(async err => {
    if (err){
      console.log(err.message)
      return
    }
    console.log("Connected to mongodb");

/*let result = await client.db('Newdatabase').collection('customer').updateOne(
    {_id: ObjectId("623beac56e5b4dc926b66d0b")},
    { $set: { name: 'April'}},
)*/

let result = await client.db('Newdatabase').collection('Players').updateOne(
    {_id: ObjectId("6248e153b689313ba6266a39")},
    { $inc: { Assist: 1}},
)


console.log(result)
});