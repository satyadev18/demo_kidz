import { post } from "./apiMethods";
import { addUser } from "./breakpoints";

export const addUserApi = (payload) => post(addUser, payload);
