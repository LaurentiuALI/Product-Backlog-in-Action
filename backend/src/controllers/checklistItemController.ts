import { ChecklistItem } from "../models/cardsModel";

import {Request, Response} from 'express';

import mongoose from "mongoose";

// GET all checklist items
export const getAllChecklistItems = async (req: Request, res: Response) => {
        
            try{
        
                // retrieve all cards from db and sort by date created (newest first)
        
                const checklistItems = await ChecklistItem.find({}).sort()
        
                // send cards as response
        
                res.status(200).json(checklistItems);
        
            }catch(err: any){
        
                // send error message as response if error occurs while retrieving cards from db
        
                if(err instanceof Error){
        
                    return res.status(400).json({message: err.message});
        
                }else{
        
                    return res.status(400).json({message: 'Something went wrong' + err});
        
                }
        
            }
        
    }

// GET one checklist item
export const getOneChecklistItem = async (req: Request, res: Response) => {
                
                    try{
                
                        // check if id is valid and send error message as response if not
                
                        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
                
                            return res.status(404).json({message: 'Checklist Item not found!'});
                
                        }
                
                        // retrieve card from db
                
                        const checklistItem = await ChecklistItem.findById(req.params.id);
                
                        // send error message as response if card is not found
                
                        if(checklistItem == null){
                
                            return res.status(404).json({message: 'Checklist Item not found'});
                
                        }
                
                        // send card as response
                
                        res.status(200).json(checklistItem);
                
                    }catch(err: any){
                
                        // send error message as response if error occurs while retrieving card from db
                
                        if(err instanceof Error){
                
                            return res.status(400).json({message: err.message});
                
                        }else{
                
                            return res.status(400).json({message: 'Something went wrong' + err});
                
                        }
                
                    }
                
                }

// PATCH one checklist item
export const patchOneChecklistItem = async (req: Request, res: Response) => {
                    
    try{

        // check if id is valid and send error message as response if not

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){

            return res.status(404).json({message: 'Checklist Item not found!'});

        }

        // retrieve card from db

        const checklistItem = await ChecklistItem.findOneAndUpdate({_id: req.params.id}, {...req.body});

        // send error message as response if card is not found

        if(checklistItem == null){

            return res.status(404).json({message: 'Checklist Item not found'});

        }

        // send card as response

        res.status(200).json(checklistItem);

    }catch(err: any){

        // send error message as response if error occurs while retrieving card from db

        if(err instanceof Error){

            return res.status(400).json({message: err.message});

        }else{

            return res.status(400).json({message: 'Something went wrong' + err});

        }

    }

}