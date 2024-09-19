import ProductCategoryContainer from "@/components/search/ProductCategoryContainer";
import { searchProduct } from "@/data/productData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Search",
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ searchParams }: Props) {
  const searchInput = searchParams["searchInput"] as string | undefined;
  let searchProductData = null;

  if (searchInput) {
    searchProductData = await searchProduct(searchInput);
  } else {
    searchProductData = await searchProduct("");
  }

  return (
    <div className="flex w-full flex-col gap-5">
      {searchProductData ? (
        searchProductData.products.length > 0 ? (
          <ProductCategoryContainer searchProductData={searchProductData} />
        ) : (
          <p className="text-center text-xl font-bold">
            No product With &ldquo;{searchInput}&ldquo; Found
          </p>
        )
      ) : (
        <p className="capitalize">An error occurred, please try again</p>
      )}
    </div>
  );
}
