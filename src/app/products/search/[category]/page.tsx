import ProductCategoryContainer from "@/components/search/ProductCategoryContainer";
import { Metadata } from "next";
import React from "react";

export const runtime = "edge";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.category.charAt(0).toUpperCase() + params.category.slice(1),
  };
}

export default function Page({ params }: Props) {
  return (
    <div className="flex w-full flex-col gap-5">
      <ProductCategoryContainer category={params.category} />
    </div>
  );
}
