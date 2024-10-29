import ProductCategoryContainer from "@/components/search/ProductCategoryContainer";
import { searchProduct } from "@/data/productData";
import { Metadata } from "next";
import React from "react";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Search",
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

/**
 * Such Page
 *
 * Auf der Seite und seiner dynamischen Unterseite findet die komplexeste Logik der
 * Anwendung statt.
 *
 * Zur Wiederverwendbarkeit der ProductCategoryContainer Komponente Verwendet jede Seite
 * ab der Search Page den Container und gibt ihm die entsprechenden Produkt Daten von der API
 */

// sucht mit dem suchstring das Produkt über die API und zeigt es an
export default async function Page({ searchParams }: Props) {
  const searchInput = searchParams["searchInput"] as string | undefined;
  let searchProductData = null;

  if (searchInput) {
    searchProductData = await searchProduct(searchInput);
  } else {
    // Um den Fall abzufangen, dass die Client seite den einen leeren Suchstring in die URL einfügt
    // Wird in der Client Seite zur sicherheit auch abgefangen
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
