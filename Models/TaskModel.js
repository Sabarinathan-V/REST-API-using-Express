const mongoose = require('mongoose');

const Schema = mongoose.Schema; // const { Schema } = mongoose;


// DEFINE A SCHEMA
const taskSchema = new Schema (
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
        }
    },

    {
        timestamps: true
    }
);

// CREATE A MODEL FROM THE SCHEMA
module.exports = mongoose.model("Task", taskSchema);
