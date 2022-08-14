const { Schema, Model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      requried: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      email: null,
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought',
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'user',
    }],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);
module.exports = User;
