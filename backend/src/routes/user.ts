const express = require("express");

// controller functionss

import { userLogin, userRegister } from "../controllers/userController";

const router = express.Router();

// login route

router.post("/login", userLogin);

// register route
router.post("/register", userRegister);

export default router;
