'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the post'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});


module.exports = mongoose.model('posts', postSchema);