import { IProductRepository } from '../../application/ports/IProductRepository';
import { Product } from '../../core/models/Product';
import { productData } from '../data/productData';

export class LocalProductRepository implements IProductRepository {
  async getProductDetails(): Promise<Product> {
    // Simulamos una carga asíncrona para respetar la arquitectura
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productData);
      }, 300);
    });
  }
}
