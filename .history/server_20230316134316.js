const mongoose = require("mongoose") ;
const User = require("./User")

mongoose.connect("mongodb://mongodb://localhost:27017/yoowesocialsocial")
run()
async function run() {
  const user = new User({ name: "laura , age: 50 })
  await user.save()
  console.log(user)  
}