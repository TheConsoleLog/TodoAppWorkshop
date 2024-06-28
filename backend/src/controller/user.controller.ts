import type { NextFunction, Request, Response } from "express";
import { UserDocument } from "../models/user.models";
import { pick } from "lodash";
import { createUser, getUser } from "../service/user.service";
import { CreateUserInput, GetUserInput } from "../schema/user.schema";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response, next: NextFunction) {
  try {
    const user = await createUser(req.body);
    return res.status(201).json(
      pick<UserDocument>(user, "username", "email", "_id")
    );
  } catch (e) {
    console.log(e);
  }
}

export async function getUserHandler(req: Request<GetUserInput["params"]>, res: Response, next: NextFunction) {
  try {
    const user = await getUser(req.params.id);
    return res.status(200).json(
      pick(user, "_id", "username", "email")
    );
  } catch (e) {
    return res.status(404).json({ message: 'User not found', error: e });
  }
}