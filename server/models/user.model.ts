import { createSchema, Type, typedModel } from "ts-mongoose";

/*
    Create User schema
*/
export const UserSchema = createSchema({
  firstName: Type.string({ required: true }),
  lastName: Type.string({ required: true }),
  email: Type.string({ required: true, unique: true }),
  password: Type.string({ required: true }),
  avatar: Type.string(),
  date: Type.date({ default: Date.now as any })
});

/*
    Function to return full name
*/
UserSchema.methods.fullName = function(): string {
  return this.firstName.trim() + " " + this.lastName.trim();
};

/*
    Export User schema
*/
export const User = typedModel("user", UserSchema);
