import { IAuthRequest } from "../middleware/requireauth";
import AlphaItem from "../models/alphaItemModel";
import { IUser } from "../models/userModel";

import {
  productBacklogItem,
  INVEST,
  agreeDefinitionOfDone,
  definitionOfDone,
  prepareAProductBacklogItem,
  testCase,
} from "./constants";

import { Request, Response } from "express";

import mongoose from "mongoose";

// GET all alpha items
export const getAllAlphaItems = async (req: IAuthRequest, res: Response) => {
  try {
    // retrieve all cards from db and sort by date created (newest first)

    const user_id = req.user?._id;
    const alphaItems = await AlphaItem.find({ user_id }).sort({ priority: -1 });

    // send cards as response

    res.status(200).json(alphaItems);
  } catch (err) {
    // send error message as response if error occurs while retrieving cards from db

    if (err instanceof Error) {
      return res.status(400).json({ message: err.message });
    } else {
      return res.status(400).json({ message: "Something went wrong" + err });
    }
  }
};

// GET one alpha item
export const getOneAlphaItem = async (req: Request, res: Response) => {
  try {
    // check if id is valid and send error message as response if not

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ message: "Alpha Item not found!" });
    }

    // retrieve card from db

    const alphaItem = await AlphaItem.findById(req.params.id);

    // send error message as response if card is not found

    if (alphaItem == null) {
      return res.status(404).json({ message: "Alpha Item not found" });
    }

    // send card as response

    res.status(200).json(alphaItem);
  } catch (err) {
    // send error message as response if error occurs while retrieving card from db

    if (err instanceof Error) {
      return res.status(400).json({ message: err.message });
    } else {
      return res.status(400).json({ message: "Something went wrong" + err });
    }
  }
};

// POST one alpha item
export const createAlphaItem = async (req: IAuthRequest, res: Response) => {
  try {
    // retrieve card from db
    const user_id = req.user?._id;

    const alphaItem = await AlphaItem.create({
      ...req.body,
      cards: [
        { ...productBacklogItem, user_id },
        { ...INVEST, user_id },
        { ...agreeDefinitionOfDone, user_id },
        { ...definitionOfDone, user_id },
        { ...prepareAProductBacklogItem, user_id },
        { ...testCase, user_id },
      ],
      user_id,
    });

    // send card as response

    return res.status(201).json(alphaItem);
  } catch (err) {
    // send error message as response if error occurs while retrieving card from db

    if (err instanceof Error) {
      return res.status(400).json({ message: err.message });
    } else {
      return res.status(400).json({ message: "Something went wrong" + err });
    }
  }
};

// DELETE one alpha item
export const deleteAlphaItem = async (req: Request, res: Response) => {
  try {
    // check if id is valid and send error message as response if not

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ message: "Alpha Item not found!" });
    }

    // delete card from db

    await AlphaItem.findByIdAndRemove(req.params.id);

    // send success message as response

    res.status(200).json({ message: "Alpha Item deleted successfully" });
  } catch (err) {
    // send error message as response if error occurs while retrieving card from db

    if (err instanceof Error) {
      return res.status(400).json({ message: err.message });
    } else {
      return res.status(400).json({ message: "Something went wrong" + err });
    }
  }
};

// PATCH one alpha item
export const updateAlphaItem = async (req: Request, res: Response) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ message: "Alpha Item not found!" });
    }

    // update alpha item in db
    const alphaItem = await AlphaItem.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );

    if (alphaItem == null) {
      return res.status(404).json({ message: "Alpha Item not found" });
    }

    // send alpha item as response

    res.status(200).json(alphaItem);
  } catch (err) {
    // send error message as response if error occurs while retrieving card from db

    if (err instanceof Error) {
      return res.status(400).json({ message: err.message });
    } else {
      return res.status(400).json({ message: "Something went wrong" + err });
    }
  }
};
