import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cadUser = new Schema({
  _id:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type:String,
    required: true
  }
})

export default cadUser