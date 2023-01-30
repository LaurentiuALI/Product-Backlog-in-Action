import mongoose from 'mongoose';

const Schema = mongoose.Schema;


// Create a schema for checklist items

const checklistItemSchema = new Schema({
    name: {
        type: String,
        required: true},
    checked: {
        type: Boolean,
        default: false
    }
});

// Create a schema for states

const stateSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    checklist:{
        type: [checklistItemSchema],
        default: []
    },
    optional:{
        type: Boolean,
        default: false
    }
});

// Create a schema for cards

const cardSchema = new Schema({
    type:{
        type: String,
        default: ''
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        default: ''
    },
    status:{
        type: Number,
        default: 0
    },
    states:{
        type: [stateSchema],
        default: []
    }

}, {timestamps: true});

const Card = mongoose.model('Card', cardSchema);

export default Card