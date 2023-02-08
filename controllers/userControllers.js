const User = require('../models/userModel');

exports.create = (req, res) => {
  User.create({
    name: req.body.name,
    age: req.body.age
  }).then(() => {
    res.send('Record created successfully!');
  });
};

exports.findAll = (req, res) => {
  User.findAll().then(users => {
    res.json(users);
  });
};

exports.update = (req, res) => {
  User.update({ age: req.body.age }, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.send('Record updated successfully!');
  });
};

exports.delete = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.send('Record deleted successfully!');
  });
};
