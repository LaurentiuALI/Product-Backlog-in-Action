import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import userModel, { type IUser } from "../models/userModel";

export interface IAuthRequest extends Request {
  user?: IUser | null;
  description?: string;
  title?: string;
  storyPoints?: number;
}

export const requireAuth = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }
  const token = authorization.split(" ")[1];
  try {
    const { _id: string } = jwt.verify(
      token,
      process.env.SECRET_STRING as any
    ) as JwtPayload;

    req.user = await userModel.findOne({ _id: string }).select("_id");

    next();
  } catch (error) {
    return res.status(401).send({ error: "Request not authorized." });
  }
};
