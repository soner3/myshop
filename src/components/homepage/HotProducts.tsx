import { getProducts } from "@/data/productData";
import { ProductData } from "@/interfaces";
import ProductCard from "./ProductCard";

export default async function HotProducts() {
  const productData: ProductData | null = await getProducts(4, 40);

  return (
    <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2">
      {!productData && "An Error Occurred"}
      {productData &&
        productData.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </div>
  );
}
