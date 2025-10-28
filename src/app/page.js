"use client"
import { Provider } from "react-redux";
import Main from "./main/page";
import { store } from "./store/page";

export default function Home() {
  return (
    <Provider store={store}>

      <Main />
    </Provider>
  );
}
