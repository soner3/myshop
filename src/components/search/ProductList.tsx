"use client";

import { Product } from "@/interfaces";
import React, { useState } from "react";
import ProductListItem from "./ProductListItem";
import Link from "next/link";
import { Pagination } from "@mui/material";
import { getProductList } from "@/data/productData";

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

  async function handlePaginationChange(
    _: React.ChangeEvent<unknown>,
    value: number,
  ) {
    setPage(value);

    const newAllProducts = await getProductList(
      limit,
      value <= 1 ? 0 : limit * (value - 1),
    );
    if (newAllProducts) {
      setAllProducts(newAllProducts.products);
    }
  }

  return (
    <>
      {isAll && (
        <Pagination
          count={Math.ceil(count / limit)}
          page={page}
          onChange={handlePaginationChange}
          color="primary"
        />
      )}
      <ul className="flex flex-wrap justify-center gap-3">
        {isAll ? (
          <>
            {allProducts.map((product) => {
              return (
                <Link
                  className="rounded-xl border from-sky-500 via-violet-600 to-rose-600 shadow-xl duration-300 hover:scale-105 hover:border-rose-600 hover:bg-gradient-to-br"
                  key={product.id}
                  href={`/products/${product.id}/`}
                >
                  <ProductListItem product={product} />
                </Link>
              );
            })}
          </>
        ) : (
          <>
            {products.map((product) => {
              return (
                <Link
                  className="rounded-xl border from-sky-500 via-violet-600 to-rose-600 shadow-xl duration-300 hover:scale-105 hover:border-rose-600 hover:bg-gradient-to-br"
                  key={product.id}
                  href={`/products/${product.id}/`}
                >
                  <ProductListItem product={product} />
                </Link>
              );
            })}
          </>
        )}
      </ul>
      {isAll && (
        <Pagination
          count={Math.ceil(count / limit)}
          page={page}
          onChange={handlePaginationChange}
          color="primary"
        />
      )}
    </>
  );
}
