export const getRandomTopCategoriesWithItems = (
  categoriesWithProducts: any,
  numberOfCategories: number,
  numberOfProductsPerCategory: number
) => {
  // Process the API response to get categories with their products
  // Shuffle the categories randomly
  const shuffledCategories = categoriesWithProducts.sort(
    () => Math.random() - 0.5
  );

  // Select a subset of categories (top categories)
  const topCategories = shuffledCategories.slice(0, numberOfCategories);

  // Randomize products within each selected category
  const categoriesWithRandomizedProducts = topCategories.map(
    (category: any) => ({
      category_name: category.category_name,
      products: category.products
        .sort(() => Math.random() - 0.5)
        .slice(0, numberOfProductsPerCategory),
    })
  );

  // Return the top categories with their products
  return categoriesWithRandomizedProducts;
};

export const getFilteredProducts = (
    categoriesWithProducts: any,
  numberOfProducts: any,
  filterFields: string[]
) => {
  // Flatten the array of categories into a single array of products
  const allProducts: any = categoriesWithProducts.reduce(
    (acc: any, category: any) => {
      acc.push(...category.products);
      return acc;
    },
    []
  );

  // Filter products based on the specified fields
  const filteredProducts = allProducts.filter((product: any) =>
    filterFields.every((field) => product[field])
  );

  // Sort filtered products by id
  const sortedFilteredProducts = filteredProducts.sort(
    (a: any, b: any) => a.id - b.id
  );

  // Return the specified number of filtered and sorted products
  return sortedFilteredProducts.slice(0, numberOfProducts);
};

export const getProductsSortedById = (
    categoriesWithProducts: any,
  numberOfProducts: number
) => {
  // Flatten the array of categories into a single array of products
  const allProducts: any = categoriesWithProducts.reduce(
    (acc: any, category: any) => {
      acc.push(...category.products);
      return acc;
    },
    []
  );

  // Sort products by id
  const sortedProductsById = allProducts.sort((a: any, b: any) => a.id - b.id);

  return sortedProductsById.slice(0, numberOfProducts);
};
export const getRandomProducts = (
  categoriesWithProducts: any,
  numberOfProducts: number
) => {
  // Process the API response to get categories with their products
  // Shuffle the categories randomly
  const allProducts = categoriesWithProducts.reduce(
    (acc: any, category: any) => {
      acc.push(...category.products);
      return acc;
    },
    []
  );

  // Shuffle all products randomly
  const shuffledProducts = allProducts.sort(() => Math.random() - 0.5);

  // Select a subset of products
  const randomProducts = shuffledProducts.slice(0, numberOfProducts);

  // Return the top categories with their products
  return randomProducts;
};

export const processApiResponse = (apiResponse: any) => {
  const categoriesMap: any = {};

  apiResponse.forEach((item: any) => {
    const categoryName = item.categoryName;
    const productId = item.id;
    if (!categoriesMap[categoryName]) {
      categoriesMap[categoryName] = {
        categoryName: categoryName,
        products: [],
      };
    }
    const existingProduct = categoriesMap[categoryName].products.find(
      (product: any) => product.id === productId
    );
    if (!existingProduct) {
      let newItem = item;
      if (item.files && item.files.length > 0) {
        if (item.files[0] && item.files[0].link) {
          let imageLink = item.files[0] && item.files[0].link;
          if (imageLink.includes("unsplash")) {
            imageLink = imageLink + "/" + item.id;
          }
          if (
            (imageLink && imageLink.includes("xls")) ||
            imageLink.includes("pdf") ||
            imageLink.includes("doc")
          )
            imageLink = null;

          newItem = {
            ...newItem,
            productImage: imageLink,
          };
        }
      }
      categoriesMap[categoryName].products.push(newItem);
    }

    if (!categoriesMap[categoryName].categoryIcon) {
      if (item.files && item.files.length > 0) {
        if (item.files[0] && item.files[0].link) {
          let categoryLink = item.files[0] && item.files[0].link;
          if (categoryLink.includes("unsplash")) {
            categoryLink = categoryLink + "/" + item.id;
          }
          if (
            (categoryLink && categoryLink.includes("xls")) ||
            categoryLink.includes("pdf") ||
            categoryLink.includes("doc")
          )
            categoryLink = null;
          categoriesMap[categoryName].categoryIcon = categoryLink;
        }
      }
    }
  });

  const categoriesWithProducts = Object.values(categoriesMap).sort(
    (a: any, b: any) => {
      const categoryA = a.categoryName.toLowerCase();
      const categoryB = b.categoryName.toLowerCase();
      if (categoryA < categoryB) {
        return -1;
      }
      if (categoryA > categoryB) {
        return 1;
      }
      return 0;
    }
  );

  return categoriesWithProducts;
};
