"use client";

import { Product } from "@/interfaces";
import React, { useState } from "react";
import ProductListItem from "./ProductListItem";
import Link from "next/link";
import { getProductList } from "@/data/productData";
import Pagination from "./Pagination";
import { useSearchParams } from "next/navigation";

/**
 * Hier findet die gesamte Logik statt damit die Sortierungen angewendet werden.
 * Sowohl für die Pagination, die Such Page als auch die Kategorien
 *
 * Die ensprechenden Parameter stehen in der URL
 */
export default function ProductList({
  products,
  limit,
  isAll,
  count,
}: {
  products: Product[];
  count: number;
  limit: number;
  isAll: boolean;
}) {
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState(products);
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");

  async function handlePaginationChange(value: number) {
    setPage(value);

    const newAllProducts = await getProductList(
      limit,
      value <= 1 ? 0 : limit * (value - 1),
    );
    if (newAllProducts) {
      setAllProducts(newAllProducts.products);
    }
  }

  switch (sort) {
    case "price-asc":
      if (isAll) {
        allProducts.sort((a, b) => a.price - b.price);
        break;
      }
      products.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      if (isAll) {
        allProducts.sort((a, b) => b.price - a.price);
        break;
      }
      products.sort((a, b) => b.price - a.price);
      break;
    case "rating-asc":
      if (isAll) {
        allProducts.sort((a, b) => a.rating - b.rating);
        break;
      }
      products.sort((a, b) => a.rating - b.rating);
      break;
    case "rating-desc":
      if (isAll) {
        allProducts.sort((a, b) => b.rating - a.rating);
        break;
      }
      products.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }

  return (
    <>
      {isAll && (
        <Pagination
          page={page}
          handleChange={handlePaginationChange}
          count={count}
          limit={limit}
        />
      )}
      <ul className="flex flex-wrap justify-center gap-8">
        {isAll ? (
          <>
            {allProducts.map((product, index) => {
              return (
                <Link
                  className="rounded-xl border from-sky-500 via-violet-600 to-rose-600 shadow-xl duration-300 hover:scale-105 hover:border-rose-600 hover:bg-gradient-to-br dark:border-rose-600"
                  key={product.id}
                  href={`/products/${product.id}/`}
                >
                  <ProductListItem index={index} product={product} />
                </Link>
              );
            })}
          </>
        ) : (
          <>
            {products.map((product, index) => {
              return (
                <Link
                  className="rounded-xl border from-sky-500 via-violet-600 to-rose-600 shadow-xl duration-300 hover:scale-105 hover:border-rose-600 hover:bg-gradient-to-br dark:border-rose-600"
                  key={product.id}
                  href={`/products/${product.id}/`}
                >
                  <ProductListItem product={product} index={index} />
                </Link>
              );
            })}
          </>
        )}
      </ul>
      {isAll && (
        <Pagination
          page={page}
          handleChange={handlePaginationChange}
          count={count}
          limit={limit}
        />
      )}
    </>
  );
}
