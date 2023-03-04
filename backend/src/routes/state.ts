import express from "express";

import {getAllStateItems, getOneStateItem, updateOneStateItem} from "../controllers/stateController"

const router = express.Router();

// GET all alpha items
router.get("/", getAllStateItems);

// GET one alpha item
router.get("/:id", getOneStateItem);

// // POST one alpha item
// router.post("/", createAlphaItem);

// // DELETE one alpha item
// router.delete("/:id", deleteAlphaItem);

// PATCH one alpha item
router.patch("/:id", updateOneStateItem);

export default router;