import express from "express";

import {getAllChecklistItems, getOneChecklistItem, patchOneChecklistItem} from "../controllers/checklistItemController"

const router = express.Router();

// GET all alpha items
router.get("/", getAllChecklistItems);

// GET one alpha item
router.get("/:id", getOneChecklistItem);

// // POST one alpha item
// router.post("/", createAlphaItem);

// // DELETE one alpha item
// router.delete("/:id", deleteAlphaItem);

// PATCH one alpha item
router.patch("/:id", patchOneChecklistItem);

export default router;