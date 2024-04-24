import { Book } from "../models/book.model.js";

export default class BookService {
  constructor() {}

  async create(data) {
    const res = await Book.create(data);
    return res;
  }

  async update(data, id) {
    const res = await Book.findByIdAndUpdate(id, data);
    return res;
  }

  async find() {
    const books = await Book.find();
    return books;
  }

  async findOne(id) {
    const book = await Book.findById(id);
    return book;
  }

  async delete(id) {
    const res = await Book.findByIdAndDelete(id);
    return res;
  }
}
