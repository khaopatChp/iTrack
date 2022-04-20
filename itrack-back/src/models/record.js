const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  activityName: { type: String, minlength: [3, 'Activity name should contains at least 3 char'] },
  typeOfActivity: { type: String},
  date: { type: String },
  description: { type: String },
  duration: { type: Number, min: [0, 'Duration must be at least 0'] },
  img: {type: String},
});

const RecordModel = mongoose.model('records', recordSchema);

module.exports = RecordModel;