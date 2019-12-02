const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
