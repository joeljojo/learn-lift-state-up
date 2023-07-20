import { fetchProducts } from "./fetchProducts";
export const filterProducts = async (query) => {
  query = query.toLowerCase();

  const products = await fetchProducts();
  /** The filter function filters the products by category name
   * The product category is split into a word
   * The word is then checked if it starts with a letter or letters od the
   * the query
   */
  let result = products.filter((product) => {
    return product.category
      .split(" ")
      .some((word) => word.toLowerCase().startsWith(query));
  });

  return result;
};
