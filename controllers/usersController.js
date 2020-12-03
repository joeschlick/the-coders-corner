const db = require('../models');

module.exports = {
    //Get all Users
    findAll: (req, res) => {
        db.User
            .find(req.query)
            .then((users) => {
                res.json(users);
            })
            .catch((err) => {
                if(err)throw err;
            })
    },
    //Get User by Id
    findById: (req, res) => {
        db.User
            .findById(req,params.id)
            .then((users) => {
                res.json(users);
            })
            .catch((err) => {
                if(err)throw err;
            })
    },
    //Create a User
    create: (req, res) => {
        db.User
            .create(req.body)
            .then((users) => {
                res.json(users);
            })
            .catch((err) =>{
                if(err) throw err;
            })
    },
    //Update a User
    update: (req, res) => {
        db.User
            .findOneAndUpdate({_id: req.params.id}, {"$push": req.body})
            .then((users) => {
                res.json(users);
            })
            .catch((err) => {
                if(err)throw err;
            })
    },
    // Delete a User
    remove: (req, res) => {
        db.User
            .findById({_id: req.params.id})
            .then((users) => {
                users.remove();
            })
            .then((users) => {
                res.json(users)
            })
            .catch((err) => {
                if(err)throw err;
            })
    }
};