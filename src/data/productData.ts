import { Product, ProductData } from "@/interfaces";

export async function getProductCategories(): Promise<Array<string> | null> {
  try {
    const res = await fetch("https://dummyjson.com/products/category-list");
    const categories: Array<string> = await res.json();
    return categories;
  } catch (error) {
    return null;
  }
}

export async function getProductList(
  limit: number,
  skip: number,
): Promise<ProductData | null> {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?skip=${skip}&limit=${limit}`,
    );
    const productData: ProductData = await res.json();
    return productData;
  } catch (error) {
    return null;
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const productData: Product = await res.json();
    return productData;
  } catch (error) {
    return null;
  }
}
