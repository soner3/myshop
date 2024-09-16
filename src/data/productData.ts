import { Product, ProductData } from "@/interfaces";

export async function getProductCategories(): Promise<Array<string> | null> {
  try {
    const res = await fetch("https://dummyjson.com/products/category-list");
    if (res.ok) {
      const categories: Array<string> = await res.json();
      return categories;
    } else {
      return null;
    }
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
    if (res.ok) {
      const productData: ProductData = await res.json();
      return productData;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (res.ok) {
      const productData: Product = await res.json();
      return productData;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export async function getProductByCategory(
  category: string,
): Promise<ProductData | null> {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`,
    );
    if (res.ok) {
      const productData: ProductData = await res.json();
      return productData;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
