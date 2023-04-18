import Product from "../models/product.js";

class ProductService {
  async create(product) {
    const createdProduct = await Product.create(product);
    return createdProduct;
  }

  async getAll() {
    const products = await Product.find();
    return products;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Id не указан");
    }
    const product = await Product.findById(id);
    return product;
  }

  async update(product) {
    if (!product._id) {
      throw new Error("Id не указан");
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      product._id,
      product,
      { new: true }
    );
    return updatedProduct;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Id не указан");
    }
    const product = await Product.findByIdAndDelete(id);
    return product;
  }
}

export default new ProductService();
