import { Product } from "@/interfaces";
import { Rating } from "@mui/material";
import React from "react";

// Produktinformationen
export default function ProductInfoCard({ product }: { product: Product }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-5 rounded-xl border p-8 shadow-xl md:grid-cols-2 dark:border-rose-600">
      <table className="table-auto">
        <caption className="caption-top p-4 text-xl font-semibold text-sky-500">
          Product Information
        </caption>
        <thead className="bg-gradient-to-br from-sky-500 to-violet-600 text-white dark:from-violet-600 dark:to-rose-600">
          <tr>
            <th>Attribute</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className="text-center capitalize">
          <tr className="border dark:border-rose-600">
            <td>category</td>
            <td className="border-l dark:border-rose-600">
              {product.category}
            </td>
          </tr>
          <tr className="border dark:border-rose-600">
            <td>brand</td>
            <td className="border-l dark:border-rose-600">{product.brand}</td>
          </tr>
          <tr className="border dark:border-rose-600">
            <td>weight</td>
            <td className="border-l dark:border-rose-600">{product.weight}</td>
          </tr>
          <tr className="border dark:border-rose-600">
            <td>dimensions</td>
            <td className="border-l dark:border-rose-600">
              <div className="flex flex-col">
                <p>width: {product.dimensions.width}dm</p>
                <p>height: {product.dimensions.height}dm</p>
                <p>depth: {product.dimensions.depth}dm</p>
              </div>
            </td>
          </tr>
          <tr className="border dark:border-rose-600">
            <td>sku</td>
            <td className="border-l dark:border-rose-600">{product.sku}</td>
          </tr>
          <tr className="border dark:border-rose-600">
            <td>barcode</td>
            <td className="border-l dark:border-rose-600">
              {product.meta.barcode}
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <caption className="caption-top p-4 text-xl font-semibold text-sky-500">
          Product Reviews
        </caption>
        <thead className="bg-gradient-to-br from-sky-500 to-violet-600 text-white dark:from-violet-600 dark:to-rose-600">
          <tr>
            <th>Reviewer</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody className="text-center capitalize">
          {product.reviews.map((review, index) => {
            return (
              <tr key={index} className="border dark:border-rose-600">
                <td>{review.reviewerName}</td>
                <td className="border-l dark:border-rose-600">
                  <div className="flex flex-col items-center justify-center">
                    <Rating
                      precision={0.2}
                      value={review.rating}
                      readOnly
                      sx={{
                        "& .MuiRating-iconEmpty": {
                          color: "#faaf00",
                        },
                      }}
                    />
                    {review.comment}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
