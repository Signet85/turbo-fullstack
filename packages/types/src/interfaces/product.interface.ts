import { CreateProductRequest } from "../products/dto/create-product.request";

export type Product = CreateProductRequest & {
    id:string;
}