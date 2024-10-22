import ProductCategoryContainer from "@/components/search/ProductCategoryContainer";
import { Metadata } from "next";
import React from "react";

// hat für die anwendung selbst keine relevanz sondern nur für das hosting über cloudflare
export const runtime = "edge";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.category.charAt(0).toUpperCase() + params.category.slice(1),
  };
}

// Product Category Page
export default function Page({ params }: Props) {
  return (
    <div className="flex w-full flex-col gap-5">
      <ProductCategoryContainer category={params.category} />
    </div>
  );
}
