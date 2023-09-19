import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "../Reducers/DictionaryReducer";

export const store = configureStore({
  reducer: { dictionary: dictionaryReducer },
});
