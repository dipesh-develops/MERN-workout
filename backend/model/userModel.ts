import mongoose from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends mongoose.Document {
  email: string;
  password: string;
}

interface IUserModel extends mongoose.Model<IUser> {
  signup(email: string, password: string): Promise<IUser>;
}

// const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema<IUser, IUserModel>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//signup static method
userSchema.statics.signup = async function (
  email: string,
  password: string
): Promise<IUser> {
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};
const User = mongoose.model<IUser, IUserModel>("User", userSchema);

export default User;
