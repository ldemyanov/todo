import { MD5 } from "crypto-js";

export const getId = (text: string) => {
  return MD5(`${Date.now()}${text}${Date.now()}`).toString();
}
