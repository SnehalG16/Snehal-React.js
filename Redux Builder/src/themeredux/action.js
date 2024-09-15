import { SET_THEME } from "../actiontype";

export const handleTheme = (payload) => ({
  type: SET_THEME,
  payload,
});