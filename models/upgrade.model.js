const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  },
  name:{
    type:String,
    require:true
  },
  level:{
    type:Number,
    require:true
  },
  cost:{
    type:String,
    require:true
  },
  coinsPerMinute:{
    type:Number,
    require:true
  },
  png:{
    type:String,
    require:true
  }

});

module.exports = mongoose.model("Upgrade", userSchema);
