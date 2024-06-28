import { Schema, Document, model, ObjectId } from "mongoose"

export type User = {
  username: string
  email: string;
  password: string;
}

export type UserDocument = Document<ObjectId> & User;

// kann auch ohne generics verwendet werden,
// da wir aber bereits erzeugt --> nehmen
// auto-complete und intellisense ist besser
// unique: ist einzigartig, aber nur in dieser Collection!
const userSchema = new Schema<UserDocument>({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
}, {
  timestamps: true
})

export const UserModel = model<UserDocument>('User', userSchema);