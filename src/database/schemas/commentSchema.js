import mongoose from 'mongoose';

const schema = mongoose.Schema;

const commentSchema = new schema({
  content: {
    type: String,
    require: true,
  },
  postID: {
    type: schema.Types.ObjectId,
    required: true,
  },
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
}

export default commentSchema;