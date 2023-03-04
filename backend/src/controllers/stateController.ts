import { State } from "../models/cardsModel"

import {Request, Response} from 'express';

import mongoose from "mongoose";

// GET all state items
export const getAllStateItems = async (req: Request, res: Response) => {
    
        try{
    
            // retrieve all cards from db and sort by date created (newest first)
    
            const stateItems = await State.find({}).sort()
    
            // send cards as response
    
            res.status(200).json(stateItems);
    
        }catch(err: any){
    
            // send error message as response if error occurs while retrieving cards from db
    
            if(err instanceof Error){
    
                return res.status(400).json({message: err.message});
    
            }else{
    
                return res.status(400).json({message: 'Something went wrong' + err});
    
            }
    
        }
    
}

// GET one state
export const getOneStateItem = async (req: Request, res: Response) => {
        
            try{
        
                // check if id is valid and send error message as response if not
        
                if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        
                    return res.status(404).json({message: 'State Item not found!'});
        
                }
        
                // retrieve card from db
        
                const stateItem = await State.findById(req.params.id);
        
                // send error message as response if card is not found
        
                if(stateItem == null){
        
                    return res.status(404).json({message: 'State Item not found'});
        
                }
        
                // send card as response
        
                res.status(200).json(stateItem);
        
            }catch(err: any){
        
                // send error message as response if error occurs while retrieving card from db
        
                if(err instanceof Error){
        
                    return res.status(400).json({message: err.message});
        
                }else{
        
                    return res.status(400).json({message: 'Something went wrong' + err});
        
                }
        
            }
       
}

// PATCH one state
export const updateOneStateItem = async (req: Request, res: Response) => {
        
            try{
        
                // check if id is valid and send error message as response if not
        
                if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        
                    return res.status(404).json({message: 'State Item not found!'});
        
                }
        
                // retrieve card from db
        
                const stateItem = await State.findOneAndUpdate({_id: req.params.id}, {...req.body});
        
                // send error message as response if card is not found
        
                if(stateItem == null){
        
                    return res.status(404).json({message: 'State Item not found'});
        
                }
        
                // send card as response
        
                res.status(200).json(stateItem);
        
            }catch(err: any){
        
                // send error message as response if error occurs while retrieving card from db
        
                if(err instanceof Error){
        
                    return res.status(400).json({message: err.message});
        
                }else{
        
                    return res.status(400).json({message: 'Something went wrong' + err});
        
                }
        
            }
        
    }