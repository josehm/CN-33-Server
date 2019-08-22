const moongose = require("mongoose");

const schema = moongose.Schema;

const postSchema = new schema({
  title: {
    type: String,
    require: true,
  },
  constent: {
    type: String,
    require: true,
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [{
    type: schema.Types.ObjectId,
    ref: 'comments'
  }]
}, { timestamps: true });

mongoose.Types.ObjectId.proptype.valueOf = function () {
  return this.toString();
}

module.exports = postSchema;
