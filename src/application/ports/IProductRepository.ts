import { Product } from '../../core/models/Product';

export interface IProductRepository {
  getProductDetails(): Promise<Product>;
}
