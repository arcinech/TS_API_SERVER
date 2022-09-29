import BaseController from './base-controller';
import { ProductsRepository } from '../repository/products-repository.interface';
import { Product } from '../interfaces/product.interface';

class ProductsController extends BaseController<Product> {
  constructor(private productsRepository: ProductsRepository) {
    super(productsRepository);
  }

  findProductByName(name: string): Product {
    return this.productsRepository.findProductByName(name);
  }
}

export default ProductsController;
