import { UserActions } from "./userActions";
import { UserState } from "./userState";

export type UserStore = UserState & UserActions;
