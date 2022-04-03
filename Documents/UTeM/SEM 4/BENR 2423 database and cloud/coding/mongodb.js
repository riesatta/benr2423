
const { MongoClient, ServerApiVersion, FindCursor } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.b5mhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//sync
client.connect(err => {
  if (err){
    console.log(err.message)
    return
  }
  console.log("Connected to mongodb");



  //CRUD OPERATION
  client.db('Newdatabase').collection('Players').insertMany([{
    name: 'Lionel Messi',
    position: 'FW-MF',
    born: ' June 24,1987',
    National: 'Argentina',
    Club: 'Paris Saint-Germain',
    avatar: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg ',
    pass: [{Realpass:'abc123'},{hashpass:'$2a$10$3B4M.hpjhX/l7oMBcEgmbudVH5y.UJFfdoN5/DsC.oT7XEMBGYSGi'}],
    Goal: 475,
    Assist: 201,
  },
  {
    name: 'Neymar',
    position: 'FW-MF',
    born: ' February 5,1992',
    National: 'Brazil',
    Club: 'Paris Saint-Germain',
    avatar: 'https://static.wikia.nocookie.net/money-heist/images/6/62/Neymar.jpg/revision/latest/top-crop/width/360/height/360?cb=20201104173037',
    pass: 'abc124',
    pass: [{Realpass:'abc124'},{hashpass:'$2a$10$dOf7yWY8hOdV/iC08mQSzuRacJC4h4p0GsJPEO20hXyxW794PJjr2'}],
    Goal: 129,
    Assist: 69,
  },
  {
    name: 'Cristiano Ronaldo',
    position: 'FW-MF',
    born: ' February 5,1985',
    National: 'Portugal',
    Club: 'Manchester United',
    avatar: 'https://fbref.com/req/202005121/images/headshots/dea698d9_2018.jpg',
    pass: 'abc124',
    pass: [{Realpass:'IAMTHEBEST'},{hashpass:'$$2a$10$Ok8UUGJq3FFgoWtORdz0BuTIIQkJWNs22b.w7ZWvrZm36W1NWoIiS'}],
    Goal: 635,
    Assist: 566,
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
