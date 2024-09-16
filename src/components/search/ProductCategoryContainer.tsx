import { getProductByCategory, getProductList } from "@/data/productData";
import React from "react";
import ProductList from "./ProductList";

export default async function ProductCategoryContainer({
  category,
}: {
  category: string;
}) {
  let productData = null;
  const limit = 30;
  const skip = 0;

  if (category === "all") {
    productData = await getProductList(limit, skip);
  } else {
    productData = await getProductByCategory(category);
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
