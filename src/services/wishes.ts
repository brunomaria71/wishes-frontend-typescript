import { getClient } from "./client";

interface Wish {
  name: string;
  type: string;
  isPossible: boolean;
  priority: 1 | 2 | 3;
}

export const getWishes = async () => {
  const client = getClient();
  const { data } = await client.get("/");

  return data as Wish[];
};
// this is making an http request to get wishes

export const createWish = async (wish: Wish) => {
  const client = getClient();
  await client.post("/", wish);
};
