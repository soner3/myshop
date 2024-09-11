export async function getProductCategories(): Promise<Array<string> | null> {
  try {
    const res = await fetch("https://dummyjson.com/products/category-list");
    const categories: Array<string> = await res.json();
    return categories;
  } catch (error) {
    return null;
  }
}
