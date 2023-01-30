import express from "express";


import { createCard, getAllCards, getOneCard, getOneCardTitle, deleteCard, updateCard } from "../controllers/cardController";

const router = express.Router();


// GET all cards
router.get("/", getAllCards);

// GET one card based on title
router.get("/title/:title", getOneCardTitle);

// GET one card
router.get("/:id", getOneCard);
 
// POST one card
router.post("/", createCard);

// DELETE one card
router.delete("/:id", deleteCard);


// PATCH one card
router.patch("/:id", updateCard);


export default router;