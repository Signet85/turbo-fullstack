

import CreateProduct from "./create-product/create-product";
import Products from "./create-product/products/products";

export default async function Home() {
  
  return (
    <div >
      
      <h1 className="text-2xl font-bold">NestJS check</h1>
      <CreateProduct/>
      <Products/>

    </div>
  );
}