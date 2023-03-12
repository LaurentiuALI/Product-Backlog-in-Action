import AlphaItem from '../models/alphaItemModel';
import { Card, ChecklistItem, State } from '../models/cardsModel';

import { productBacklogItem, INVEST, agreeDefinitionOfDone, definitionOfDone, prepareAProductBacklogItem, testCase } from './constants';

import {Request, Response} from 'express';

import mongoose from "mongoose";

// GET all alpha items
export const getAllAlphaItems = async (req: Request, res: Response) => {

    try{

        // retrieve all cards from db and sort by date created (newest first)

        const alphaItems = await AlphaItem.find({}).sort({priority: -1})

        // send cards as response

        res.status(200).json(alphaItems);

    }catch(err: any){

        // send error message as response if error occurs while retrieving cards from db

        if(err instanceof Error){

            return res.status(400).json({message: err.message});

        }else{

            return res.status(400).json({message: 'Something went wrong' + err});

        }

    }

}


// GET one alpha item
export const getOneAlphaItem = async (req: Request, res: Response) => {

    try{

        // check if id is valid and send error message as response if not

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){

            return res.status(404).json({message: 'Alpha Item not found!'});

        }

        // retrieve card from db

        const alphaItem = await AlphaItem.findById(req.params.id);

        // send error message as response if card is not found

        if(alphaItem == null){

            return res.status(404).json({message: 'Alpha Item not found'});

        }

        // send card as response

        res.status(200).json(alphaItem);

    }catch(err){

        // send error message as response if error occurs while retrieving card from db

        if(err instanceof Error){

            return res.status(400).json({message: err.message});

        }else{

            return res.status(400).json({message: 'Something went wrong' + err});

        }

    }

}

// POST one alpha item
export const createAlphaItem = async (req: Request, res: Response) => {
        try{
    
            // retrieve card from db

            // const productBacklogItemCard = await createCard( productBacklogItem );

            // const INVESTCard = await Card.create( INVEST );

            // const agreeDefinitionOfDoneCard = await Card.create( agreeDefinitionOfDone );
     
            // const definitionOfDoneCard = await createCard( definitionOfDone );

            // const prepareAProductBacklogItemCard = await Card.create( prepareAProductBacklogItem );

            // const testCaseCard = await createCard( testCase );

            const alphaItem = await AlphaItem.create({...req.body, cards: [productBacklogItem, INVEST, agreeDefinitionOfDone, definitionOfDone, prepareAProductBacklogItem, testCase] });
            
    
            // send card as response
    
            res.status(201).json(alphaItem);
    
        }catch(err){
    
            // send error message as response if error occurs while retrieving card from db
    
            if(err instanceof Error){
    
                return res.status(400).json({message: err.message});
    
            }else{
    
                return res.status(400).json({message: 'Something went wrong' + err});
    
            }
    
        }
    

    // async function createCard(card: any) {
    //     let newStatesProductBacklogItem: any[] = [];
    //     for (let state of card.states) {
    //         const newChecklistItems: any[] = [];
    //         for (let checklistItem of state.checklist) {
    //             newChecklistItems.push(await ChecklistItem.create(checklistItem));
    //         }
    //         newStatesProductBacklogItem.push(await State.create({ ...state, checklist: newChecklistItems }));
    //     }
    //     const productBacklogItemCard = await Card.create({ ...card, states: newStatesProductBacklogItem });
    //     return productBacklogItemCard;
    // }
    }

// DELETE one alpha item
export const deleteAlphaItem = async (req: Request, res: Response) => {
    
        try{
    
            // check if id is valid and send error message as response if not
    
            if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    
                return res.status(404).json({message: 'Alpha Item not found!'});
    
            }
    
            // delete card from db
    
            await AlphaItem.findByIdAndRemove(req.params.id);
    
            // send success message as response
    
            res.status(200).json({message: 'Alpha Item deleted successfully'});
    
        }catch(err){
    
            // send error message as response if error occurs while retrieving card from db
    
            if(err instanceof Error){
    
                return res.status(400).json({message: err.message});
    
            }else{
    
                return res.status(400).json({message: 'Something went wrong' + err});
    
            }
    
        }
    
    }

// PATCH one alpha item
export const updateAlphaItem = async (req: Request, res: Response) => {

    try{
        
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){

            return res.status(404).json({message: 'Alpha Item not found!'});

        }

        // update alpha item in db
        const alphaItem = await AlphaItem.findOneAndUpdate({_id: req.params.id}, {...req.body});

        if(alphaItem == null){

                return res.status(404).json({message: 'Alpha Item not found'});
    
        }

        // send alpha item as response

        res.status(200).json(alphaItem);

    }catch(err){

        // send error message as response if error occurs while retrieving card from db

        if(err instanceof Error){

            return res.status(400).json({message: err.message});

        }else{

            return res.status(400).json({message: 'Something went wrong' + err});

        }

    }
}
