const mongoose = require("mongoose")

mongoose.connect("mongodb://mongodb://localhost:27017/yoowesocialsocial")
run()
async function run() {
  const User =  User({ name: "laura" , age: 50 })
  await User.save()
  console.log(User)  
}