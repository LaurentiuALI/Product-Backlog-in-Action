import express from "express";

import  { getAllAlphaItems, getOneAlphaItem, createAlphaItem, deleteAlphaItem, updateAlphaItem}  from  "../controllers/alphaItemController" ;

const router = express.Router();

// GET all alpha items
router.get("/", getAllAlphaItems);

// GET one alpha item
router.get("/:id", getOneAlphaItem);

// POST one alpha item
router.post("/", createAlphaItem);

// DELETE one alpha item
router.delete("/:id", deleteAlphaItem);

// PATCH one alpha item
router.patch("/:id", updateAlphaItem);

export default router;