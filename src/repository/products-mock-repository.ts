import { ProductsRepository } from './products-repository.interface';
import { Product } from '../interfaces/product.interface';
import shortid from 'shortid';
import { findOrThrow } from '../utils/findOrThrow';

export class ProductsMockRepository implements ProductsRepository {
  private products: Array<Product> = [];

  addItem(item: Product): Product {
    item.id = shortid.generate();
    item.createdAt = new Date();
    item.updatedAt = new Date();
    this.products.push(item);
    return item;
  }

  updateItem(id: string, item: Product): Product {
    this.products = this.products.map(i => {
      if (i.id === id) {
        return {
          ...item,
          id: i.id,
          createdAt: i.createdAt,
          updatedAt: new Date(),
        };
      }

      return i;
    });

    return this.getElementById(id);
  }

  deleteItem(id: string): boolean {
    this.products = this.products.filter(i => i.id !== id);
    return !this.getElementById(id);
  }

  getElementById(id: string): Product {
    return findOrThrow(this.products, i => i.id === id);
  }

  getAllItems(): Array<Product> {
    return this.products;
  }

  findProductByName(name: string): Product {
    return findOrThrow(this.products, i => i.name === name);
  }
}
