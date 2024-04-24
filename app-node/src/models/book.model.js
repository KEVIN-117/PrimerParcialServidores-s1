import { Schema, model } from "mongoose";

const BOOK_SCHEMA = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

export const Book = model("Book", BOOK_SCHEMA);
