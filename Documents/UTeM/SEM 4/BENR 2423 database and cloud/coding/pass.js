const bcrypt = require("bcryptjs")
//const {MongoClient} = require('mongodb') 

const password = "IAMTHEBEST"
const saltRounds = 10

bcrypt.genSalt(saltRounds, function (saltError, salt) {
  if (saltError) {
    throw saltError
  } else {
    bcrypt.hash(password, salt, function(hashError, hash) {
      if (hashError) {
        throw hashError
      } else {
        console.log(hash)
        //$2a$05$3pqF8gapjY82H.T4G7LNauba.lObTbsVWsBkAh2jEKl.9kK2l/cHq
      }
    })
  }
})