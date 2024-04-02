"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import "../../../styles/HomePage.scss";
import { useEffect, useState } from "react";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import {
  getFilteredProductsByCategoryAndCountry,
  processApiResponse,
} from "@/api/helper/dataFilter";
import { useMarketData } from "@/app/hooks/useMarketData";

export default function Category({ params }: any) {
  const slug = params && params.slug ? params.slug : null;
  const [categoryName, setCategoryName] = useState<any>(null);
  const [featuredProducts, setFeaturedProducts] = useState<any>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const { data: marketData, isLoading } = useMarketData();

  useEffect(() => {
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    }
  }, [selectedCountry]);

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
        getFilteredProductsByCategoryAndCountry(
          formated,
          100,
          [],
          slug,
          selectedCountry
        )
      );
    }
  }, [marketData, slug, selectedCountry]);

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
          {isLoading ? (
            <Box
              className="loaderBox"
              sx={{
                width: "max-content",
                margin: "0 auto 4rem auto",
              }}
            >
              <CircularProgress sx={{ color: "rgb(38, 92, 129)" }} />
            </Box>
          ) : (
            <div
              className="other-page-wrap-start"
              style={{ marginBottom: "2rem" }}
            >
              {featuredProducts.length > 0 ? (
                <FeaturedProducts
                  backAction={true}
                  title={categoryName ?? ""}
                  data={featuredProducts}
                />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography>No products available!</Typography>
                </Box>
              )}
            </div>
          )}
        </div>
      </Box>
    </main>
  );
}
