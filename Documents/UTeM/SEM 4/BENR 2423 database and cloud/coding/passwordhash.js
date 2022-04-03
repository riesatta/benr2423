const bcrypt = require("bcryptjs")

const passwordEnteredByUser = "12345"
const hash = "$2a$05$3pqF8gapjY82H.T4G7LNauba.lObTbsVWsBkAh2jEKl.9kK2l/cHq"

bcrypt.compare(passwordEnteredByUser, hash, function(error, isMatch) {
  if (error) {
    throw error
  } else if (!isMatch) {
    console.log("Password doesn't match!")
  } else {
    console.log("Password matches!")
  }
})