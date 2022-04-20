const express = require('express');

const RecordModel = require('../models/record');

const router = express.Router();

router.use('/:recordId', async (req, res, next) => {
  const recordId = req.params.recordId;
  if (recordId && !recordId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).send('Record not found');
  }
  const foundRecord = await RecordModel.findById(recordId);
  console.log(foundRecord)
  if (!foundRecord) {
    return res.status(404).send('Record not found');
  }
  req.foundRecord = foundRecord;
  next();
});

router.get('/:recordId', (req, res, next) => {
  return res.send(req.record);
});

router.get('/', async (req, res, next) => {
  const records = await RecordModel.find({});
  res.send(records);
});

router.post('/', async (req, res, next) => {
  const body = req.body;

  const newRecord = new RecordModel(body);

  const errors = newRecord.validateSync();
  if (errors) {
    const errorFieldNames = Object.keys(errors.errors);
    if (errorFieldNames.length > 0) {
      return res.status(400).send(errors.errors[errorFieldNames[0]].message);
    }
  }

  await newRecord.save();
  return res.status(201).send(newRecord);
});

router.put('/:recordId', async  (req, res, next) => {
  const body = req.body ;
  const index = req.params.recordId;
  // find the request doc by it's id
  const recordToBeUpdated = await RecordModel.findOne({_id : index})

  const errors = recordToBeUpdated.validateSync();
  if (errors) {
    const errorFieldNames = Object.keys(errors.errors);
    if (errorFieldNames.length > 0) {
      return res.status(400).send(errors.errors[errorFieldNames[0]].message);
    }
  }
  

  if(body.activityName) recordToBeUpdated.activityName = body.activityName
  if(body.typeOfActivity) recordToBeUpdated.typeOfActivity = body.typeOfActivity
  if(body.date) recordToBeUpdated.date = body.date
  if(body.description) recordToBeUpdated.description = body.description
  if(body.duration) recordToBeUpdated.duration = body.duration
  if(body.img) recordToBeUpdated.img = body.img
  
  await recordToBeUpdated.save();
  
  return res.status(201).send(recordToBeUpdated);

});

router.delete('/:recordId', async (req, res, next) => {
  await RecordModel.deleteOne({ _id: req.params.recordId });
  return res.status(204).send(); // 204 = No content which mean it successfully removed
});

module.exports = router;