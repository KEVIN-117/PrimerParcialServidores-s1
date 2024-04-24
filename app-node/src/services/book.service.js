export default class BookService {
  constructor() {}

  async create(data) {
    console.log(data);
  }

  async update(data, id) {
    console.log(data, id);
  }

  async find() {
    console.log("find");
  }

  async findOne(id) {
    console.log(id);
  }

  async delete(id) {
    console.log(id);
  }
}
