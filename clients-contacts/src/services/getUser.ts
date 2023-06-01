import { iUser } from "../providers/UserContext";
import { api } from "./api";

const token = localStorage.getItem("@TOKEN");
const userID = localStorage.getItem("@USERid");

export async function getUser() {
  const response = await api.get<iUser>("/users/" + userID, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}