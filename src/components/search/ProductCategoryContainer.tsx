import { getProductByCategory, getProductList } from "@/data/productData";
import React from "react";
import { ProductData } from "@/interfaces";
import ProductList from "./ProductList";

/**
 * befindet man sich auf der Search Page wird der Such werden die Produktdaten das Ergebnis
 * der Produktsuche ansonsten werden die Produkte nach Filter angezeigt
 */
export default async function ProductCategoryContainer({
  category,
  searchProductData,
}: {
  category?: string;
  searchProductData?: ProductData;
}) {
  let productData = null;
  if (searchProductData) {
    productData = searchProductData;
  }
  const limit = 30;
  const skip = 0;

  if (category === "all") {
    productData = await getProductList(limit, skip);
  } else {
    if (category) {
      productData = await getProductByCategory(category);
    }
  }

  if (!productData) {
    return (
      <div className="text-2xl font-semibold capitalize">
        An Error Occured please Reload The Page
      </div>
    );
  }

  return (
    <>
      <ProductList
        products={productData.products}
        count={productData.total}
        limit={limit}
        isAll={category === "all"}
      />
    </>
  );
}
