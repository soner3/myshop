import ProductPageBody from "@/components/product/ProductPageBody";
import ProductPageHeader from "@/components/product/ProductPageHeader";
import { getProduct } from "@/data/productData";
import { Product } from "@/interfaces";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const product: Product | null = await getProduct(id);

  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {};
  }
}

export default async function page({ params }: Props) {
  const product: Product | null = await getProduct(params.id);

  if (!product) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <h2 className="text-3xl font-bold capitalize">
          This Product Does not exist
        </h2>
        <p className="text-xl font-bold capitalize">
          Please search for a product at the Product Page
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center p-4">
      <div className="m-4 flex w-full flex-col p-4">
        <ProductPageHeader product={product} />
        <ProductPageBody product={product} />
      </div>
    </div>
  );
}
