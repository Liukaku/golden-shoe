import { auth } from "./init";
import { signInWithEmailAndPassword } from "firebase/auth";

export const logIn = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
