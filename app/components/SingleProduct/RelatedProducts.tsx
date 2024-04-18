"use client";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import { useMarketData } from "@/app/hooks/useMarketData";
import {
  getFilteredProductsByCategory,
  getProductBySlug,
  processApiResponse,
} from "@/api/helper/dataFilter";

export default function RelatedProducts({ slug, singleProduct }: any) {
  const { data: marketData } = useMarketData();
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [categoryName, setCategoryName] = useState<any>(null);
  const [categorySlug, setCategorySlug] = useState<any>(null);
  const [productName, setProductName] = useState<any>(null);

  const excludeProductById = (singleProduct: any[], excludedId: number) => {
    return singleProduct.filter((product) => product.id !== excludedId);
  };

  useEffect(() => {
    if (marketData) {
      const formated = processApiResponse(marketData);
      const product = getProductBySlug(formated, slug);

      if (product && product.productName) {
        setProductName(product.productName);
      }

      if (formated) {
        const category: any = formated.find(
          (cat: any) => cat.categorySlug === slug
        );

        if (category && category.categoryName) {
          setCategoryName(category.categoryName);
        }
      }

      setCategorySlug(product?.categorySlug);

      if (formated && product && categorySlug) {
        let products = getFilteredProductsByCategory(
          formated,
          4,
          [],
          categorySlug
        );
        products = excludeProductById(products, product.id);
        setRelatedProducts(products);
      }
    }
  }, [marketData, slug, productName]);

  return (
    <Box>
      {relatedProducts.length > 0 && (
        <FeaturedProducts
          backAction={false}
          title={"Related Products"}
          data={relatedProducts}
        />
      )}
    </Box>
  );
}
