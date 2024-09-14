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
    return {
      title: "",
    };
  }
}

export default function page({ params }: Props) {
  return <div>Hello from {params.id} page</div>;
}
