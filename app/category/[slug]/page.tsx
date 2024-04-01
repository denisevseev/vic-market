"use client";
import { Box } from "@mui/material";
import "../../../styles/HomePage.scss";
import DataJson from "../../components/data.json";
import { useEffect, useState } from "react";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import {
  getFilteredProducts,
  getFilteredProductsByCategory,
  getProductsSortedById,
  getRandomProducts,
  getRandomTopCategoriesWithItems,
  processApiResponse,
} from "@/api/helper/dataFilter";
import VariableWidth from "../../components/shared/ScrollableTabs/ScrollableTabs";
import { useMarketData } from "@/app/hooks/useMarketData";

export default function Category({ params }: any) {
  const slug = params && params.slug ? params.slug : null;
  const [categoryName, setCategoryName] = useState<any>(null);
  const [featuredProducts, setFeaturedProducts] = useState<any>([]);
  const { data: marketData, isLoading } = useMarketData();

  useEffect(() => {
    if (marketData) {
      const formated = processApiResponse(marketData);
      if (formated) {
        const category: any = formated.find(
          (cat: any) => cat.categorySlug === slug
        );

        if (category && category.categoryName) {
          setCategoryName(category.categoryName);
        }
      }
      setFeaturedProducts(
        getFilteredProductsByCategory(formated, 100, [], slug)
      );
    }
  }, [marketData, slug]);

  return (
    <main>
      <Box className="container">
        <div
          style={{
            width: "98%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "4rem",
          }}
        >
          <div
            className="other-page-wrap-start"
            style={{ marginBottom: "2rem" }}
          >
            <FeaturedProducts
              backAction={true}
              title={categoryName ?? ""}
              data={featuredProducts}
            />
          </div>
        </div>
      </Box>
    </main>
  );
}
