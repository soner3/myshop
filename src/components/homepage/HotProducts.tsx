import { ProductData } from "@/interfaces";
import ProductCard from "./HotProductCard";
import { getProductList } from "@/data/productData";

export default async function HotProductCard() {
  const productData: ProductData | null = await getProductList(4, 185);

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