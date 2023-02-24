import { Card, State, ChecklistItem }  from "../models/cardsModel";

import {Request, Response} from 'express';

import mongoose from "mongoose";


export const getAllCards = async (req: Request, res: Response) => {
    try{
        // retrieve all cards from db and sort by date created (newest first)
        const cards = await Card.find({}).sort({createdAt: -1})

        // send cards as response
        res.status(200).json(cards);

    }catch(err: any){

        // send error message as response if error occurs while retrieving cards from db
        if(err instanceof Error){
            return res.status(400).json({message: err.message});
        }else{
            return res.status(400).json({message: 'Something went wrong' + err});
        }
    }
}

export const getOneCard = async (req: Request, res: Response) => {
    try{

        // check if id is valid and send error message as response if not
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({message: 'Card not found!'});
        }
        
        // retrieve card from db
        const card = await Card.findById(req.params.id);
        
        // send error message as response if card is not found
        if(card == null){
            return res.status(404).json({message: 'Card not found'});
        }

        // send card as response
        res.status(200).json(card);



    }catch(err){

        // send error message as response if error occurs while retrieving card from db
        if(err instanceof Error){
            return res.status(400).json({message: err.message});
        }else{
            return res.status(400).json({message: 'Something went wrong' + err});
        }

    }
}

//GET one card based on title
export const getOneCardTitle = async (req: Request, res: Response) => {
    try{

        // retrieve card from db
        const card = await Card.findOne({title: req.params.title});

        // send error message as response if card is not found
        if(card == null){
            return res.status(404).json({message: 'Card not found'});
        }

        // send card as response
        res.status(200).json(card);

    }catch(err){

        // send error message as response if error occurs while retrieving card from db
        if(err instanceof Error){
            return res.status(400).json({message: err.message});
        }else{
            return res.status(400).json({message: 'Something went wrong' + err});
        }
    }
}


//POST one card
export const createCard = async (req: Request, res: Response) => {

    // retrieve data from request body
    const {type, title, description, status, states} = req.body;

    // create new card
    try{
        
        const newCard = await Card.create({
            type,
            title,
            description,
            status,
            states
        });
        res.status(201).json(newCard);
    }catch(err){
        
        // send error message as response if error occurs while creating card

        if(err instanceof Error){
            return res.status(400).json({message: err.message});
        }else{
            return res.status(400).json({message: 'Something went wrong' + err});
        }

    }
}
            
//DELETE one card
export const deleteCard = async (req: Request, res: Response) => {
    try{

        // check if id is valid and send error message as response if not
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({message: 'Card not found!'});
        }

        // delete card from db
        const card = await Card.findOneAndDelete({_id: req.params.id});

        // send error message as response if card is not found
        if(card == null){
            return res.status(404).json({message: 'Card not found'});
        }

        // send card as response
        res.status(200).json(card);

    }catch(err){

        // send error message as response if error occurs while deleting card from db
        if(err instanceof Error){
            return res.status(400).json({message: err.message});
        }else{
            return res.status(400).json({message: 'Something went wrong' + err});
        }
    }
}

//PATCH one card
export const updateCard = async (req: Request, res: Response) => {
    try{

        
        // check if id is valid and send error message as response if not
        
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({message: 'Card not found!'});
        }
        
        // update card in db
        console.log({...req.body})
        const card = await Card.findOneAndUpdate({_id: req.params.id}, {...req.body});

        // send error message as response if card is not found
        if(card == null){
            return res.status(404).json({message: 'Card not found'});
        }

        // send card as response
        res.status(200).json(card);

    }catch(err){

        // send error message as response if error occurs while updating card in db
        if(err instanceof Error){
            return res.status(400).json({message: err.message});
        }else{
            return res.status(400).json({message: 'Something went wrong' + err});
        }
    }

}