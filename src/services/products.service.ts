import ResourceService from "./resource.service";
import ProductModel from "@/models/product.model";

class ProductsService extends ResourceService<ProductModel> {
  resource = ProductModel;
  path = "products";
}

export default ProductsService;