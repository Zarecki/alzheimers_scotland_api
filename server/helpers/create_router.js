const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/'. (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
  });

  router.get('/:location', (req, res) => {
    const location = req.params.location;
    collection
      .find({ location: location}, {name: 1, url: 0, description: 1, startDate: 1, endDate: 0, streetAddress: 1, addressLocality: 1, addressCountry: 0, geo: 0, country: 0})
      .toArray()
      .then((docs) => res.json(docs))
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    collection
      .updateOne(
        { _id: ObjectID(id) },
        { $set: updatedData }
      )
      .then(() => collection.find().toArray())
      .then ((docs) => res.json(docs));
  });

  return router;

};

module.exports = createRouter;
