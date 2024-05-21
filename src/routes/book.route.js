import { Router } from "express";
import {
  createBook,
  getBookById,
  getBooks,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";

const bookRouter = Router();

bookRouter.get("/books", getBooks);

bookRouter.get("/books/:id", getBookById);

bookRouter.post("/books", createBook);

bookRouter.put("/books/:id", updateBook);

bookRouter.delete("/books/:id", deleteBook);

export default bookRouter;
