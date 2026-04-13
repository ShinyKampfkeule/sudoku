import { createStore } from "zustand";
import { UserState } from "../types/userState";
import { UserStore } from "../types/userStore";

export const defaultInitState: UserState = {
  name: "Placeholder",
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    changeName: (name) =>
      set(() => ({
        name: name,
      })),
  }));
};
