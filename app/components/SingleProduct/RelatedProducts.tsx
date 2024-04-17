"use client";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import { useMarketData } from "@/app/hooks/useMarketData";
import {
  getFilteredProductsByCategory,
  processApiResponse,
} from "@/api/helper/dataFilter";

export default function RelatedProducts({ slug, singleProduct }: any) {
  const { data: marketData } = useMarketData();
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  useEffect(() => {
    if (marketData && singleProduct) {
      const formattedData = processApiResponse(marketData);
      const categoryProducts = formattedData.filter(
        (product: any) => product.categoryName === singleProduct.categoryName
      );
      const related = getFilteredProductsByCategory(
        categoryProducts,
        4,
        [],
        slug
      );
      setRelatedProducts(
        related.filter((product: any) => product.id !== singleProduct.id)
      );
    }
  }, [marketData, singleProduct]);

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
