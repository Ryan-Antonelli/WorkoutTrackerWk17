// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const ResistanceSchema = new Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: "Exercise name is Required"
//   },

//   weight: {
//     type: Number,
//     trim: true,
//   },

//   sets: {
//     type: Number,
//     trim: true,

//   },

//   reps: {
//     type: Number,
//     trim: true,

//   },
  
//   duration: {
//     type: Number,
//     trim: true
//   }
// });

// const CardioSchema = new Schema({
//     name: {
//       type: String,
//       trim: true,
//       required: "Exercise name is Required"
//     },
  
//     duration: {
//       type: Number,
//       trim: true,
//     },
  
//     distance: {
//       type: Number,
//       trim: true,
//     },
//   });


// const Resistance = mongoose.model("Resistance", ResistanceSchema);

// const Cardio = mongoose.model("Cardio", CardioSchema);

// module.exports.resistance = Resistance;
// module.exports.cardio = Cardio;

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => Date.now(),
    },
    exercises: [
        {
            type: {
                type: String,
                required: 'Select exercise type.',
            },
            name: {
                type: String,
                trim: true,
                required: 'Enter the name of the exercise.',
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
              type: Number
            }
        },
    ],
})
const Exercises = mongoose.model('Exercises', workoutSchema)
module.exports = Exercises