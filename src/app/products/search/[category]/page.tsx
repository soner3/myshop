import ProductCategoryContainer from "@/components/search/ProductCategoryContainer";
import { getProductCategories } from "@/data/productData";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.category.charAt(0).toUpperCase() + params.category.slice(1),
  };
}

export async function generateStaticParams() {
  const categories: Array<string> | null = await getProductCategories();

  if (!categories) {
    return [];
  }

  const categoryList: Array<string> = ["all", ...categories];

  return categoryList.map((listItem) => ({
    category: listItem,
  }));
}

export default function Page({ params }: { params: { category: string } }) {
  return (
    <div className="flex w-full flex-col gap-5">
      <ProductCategoryContainer category={params.category} />
    </div>
  );
}
