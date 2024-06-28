import { error, log } from "console";
import { User, UserModel } from "../models/user.models"

export async function createUser(user: User) {
  try {
    const userDocument = await UserModel.create(user);
    log("{User Service | Created User} - Sucessfully created user with id: " + userDocument._id);
    return userDocument;
  } catch(e) {
    error(e);
    throw e;
  }
}

export async function getUser(id: string) {
  try {
    const user = await UserModel.findById(id);
    if(!user)
      throw new Error(`Could not find user with ${id}`)
    return user;
  } catch (e) {
    log('{User Service | Created User} - Error getting user ');
    throw e;
  }
}