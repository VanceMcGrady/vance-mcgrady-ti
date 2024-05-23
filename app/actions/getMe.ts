"use server";

import { error } from "console";
import { me } from "../mock_data/data";
export async function getMe() {
  // fetch my own user data
  try {
    return me;
  } catch {
    // send error to monitoring service of choice
    console.log("error in getMe: ", error);
  }
}
