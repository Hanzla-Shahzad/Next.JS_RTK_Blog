import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getData = createAsyncThunk("getData", async () => {
  try {
    const response = await url.get("/posts");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("getData======>error", error);
  }
});
