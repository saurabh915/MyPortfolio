import { useReducer } from "react";
import { createContext } from "react";
export const themeContext = createContext();
const initialState = { darkMode: false };

//this  action is taken from dispatch
const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};
export const ThemeProvider = (props) => {
  //themereducer is function; initialstate is object
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    // value is not variable it is keyword
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}  
    </themeContext.Provider>
  );
};
