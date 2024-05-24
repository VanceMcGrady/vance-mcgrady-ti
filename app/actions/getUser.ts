import { error } from "console";
import { users } from "../mock_data/data";

export async function getUser(user_id: string) {
  try {
    return users.find((user) => user.id.toString() === user_id);
  } catch {
    console.log("error in getUser: ", error);
  }
}
