const router = require('express').Router()
const Exercises = require("../models/models.js");

router.get('/api/workouts/', (req, res) => {
    Exercises.find({})
        .then((workout) => {
            console.log("found(1):" + workout)
            res.json(workout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
});

router.get('/api/workouts/range', (req, res) => {
    // res.json([])
    Exercises.find({})
        .limit(7)
        .then((workout) => {
            console.log('line 29 called')
            console.log(workout)
            res.json(workout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

router.post("/api/workouts/", ({ body }, res) => {
    Exercises.create(body)
     .then((created) => {
         res.json(created)
     })
     .catch((err) => {
         res.status(400).json(err)
     })
});

router.put("/api/workouts/ :id", ({ body, params }, res) => {
    Exercises.updateOne({ _id: params.id }, { $push: { exercises: body } })
    .then((workout) => {
        res.json(workout)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
});

router.delete("/api/workouts", ({ body }, res) => {
    Exercises.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports = router





