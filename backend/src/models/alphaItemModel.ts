import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create a schema for checklist items

const alphaItemSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    UID:{
        type: String,
        required: true
    },
    storyPoints:{
        type: Number,
        default: 1
    },
    priority:{
        type: Number,
        default: 1
    },
    state:{
        type: String,
        default: "Identified"
    }
});

const AlphaItem = mongoose.model("alphaItem", alphaItemSchema);

export default AlphaItem;