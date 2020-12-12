const router = require("express").Router();
let User = require("../models/User");

//const usersController = require("../../controllers/usersController");

//Get all Users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

//Add a User
router.route("/add").post((req, res) => {
  const userName = req.body.userName;
  const newUser = new User({ userName });
  console.log("hello");
  newUser
    .save()
    .then(() => {
      res.json("User Added");
    })
    .catch((err) => {
      if (err) throw err;
    });
});

//Find User by id
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

//Delete User by id
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      res.json("User Deleted");
    })
    .catch((err) => {
      if (err) throw err;
    });
});

//Update an User
router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.username = req.body.username;
      user
        .save()
        .then(() => {
          res.json("User Updated");
        })
        .catch((err) => {
          if (err) throw err;
        });
    })
    .catch((err) => {
      if (err) throw err;
    });
});

router.route("/updateLikes/:userID").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      console.log(user);
      posts.post = req.body.post;
      console.log(req.body.post);
      user
        .save()
        .then(() => {
          res.json("User Updated");
        })
        .catch((err) => {
          if (err) throw err;
        });
    })
    .catch((err) => {
      if (err) throw err;
    });
});

module.exports = router;
