import BookService from "../services/book.service.js";

const bookService = new BookService();

export const createBook = async (req, res) => {
  try {
    const data = req.body;

    const book = await bookService.create(data);
    if (book) {
      return res.status(201).json({ message: "Book created successfully" });
    }
    return res.status(500).json({ error: "Book could not be created" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const book = await bookService.update(data, id);

    if (book) {
      return res.status(200).json({ message: "Book updated successfully" });
    }
    return res.status(404).json({ error: "Book not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await bookService.find();

    if (books) {
      return res.status(200).json({ books });
    }
    return res.status(404).json({ error: "Books not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await bookService.findOne(id);

    if (book) {
      return res.status(200).json({ book });
    }
    return res.status(404).json({ error: "Book not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await bookService.delete(id);

    if (book) {
      return res.status(200).json({ message: "Book deleted successfully" });
    }
    return res.status(404).json({ error: "Book not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
