const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true, 
      max_length: 10,
      id: Unique, 
    },

    Email: {
      type: String,  
    }

  }  
)