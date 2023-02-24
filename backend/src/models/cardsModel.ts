import mongoose from 'mongoose';

const Schema = mongoose.Schema;


// Create a schema for checklist items

export const checklistItemSchema = new Schema({
    name: {
        type: String,
        required: true},
    checked: {
        type: Boolean,
        default: false
    }
});

// Create a schema for states

export const stateSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        default: 0
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

export const cardSchema = new Schema({
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

export const Card = mongoose.model('Card', cardSchema);
export const State = mongoose.model('State', stateSchema);
export const ChecklistItem = mongoose.model('ChecklistItem', checklistItemSchema);