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
import Image from "next/image";
import "./style.scss";
import HeadData from "@/app/components/head";

export default function Category({ params }: any) {
  const slug = params && params.slug ? params.slug : null;

  const [categoryName, setCategoryName] = useState<any>(null);
  const [featuredProducts, setFeaturedProducts] = useState<any>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const { data: marketData, isLoading } = useMarketData();

  const convertCategorySlugToName = (slug: string) => {
    const words = slug.split("-");

    return words
      .map((word) => {
        if (word.toLowerCase() === "and") {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

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

        if (!category) {
          const categoryNameFromSlug = convertCategorySlugToName(slug);
          setCategoryName(categoryNameFromSlug);
        } else {
          setCategoryName(category.categoryName);
        }
      }
      setFeaturedProducts(
        getFilteredProductsByCategoryAndCountry(
          formated,
          1000,
          [],
          slug,
          selectedCountry
        )
      );
    }
  }, [marketData, slug, selectedCountry]);

  return (
    <main>
      <HeadData
        title={`${
          categoryName
            ? categoryName + " Category"
            : convertCategorySlugToName(slug) + " Category"
        } Category | Victorum Trade`}
        description={`Explore a wide range of products in the ${
          categoryName
            ? categoryName + " Category"
            : convertCategorySlugToName(slug) + " Category"
        } category at Victorum Trade. Find the best deals on quality products from trusted sellers.`}
        keywords={`${
          categoryName
            ? categoryName + " Category"
            : convertCategorySlugToName(slug) + " Category"
        }, marketplace, shopping, online store, Victorum`}
      />
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
                    flexDirection: "column",
                    marginBottom: "6rem",
                    height: "30vh",
                  }}
                >
                  <div
                    className="imageContainer-big"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "relative", // Parent must be positioned to use 'fill' layout
                      height: "200px", // Default height
                      width: "300px",
                    }}
                  >
                    <Image
                      src="/no-product-found.png"
                      alt="No product found"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>

                  <Typography
                    variant="h6"
                    component="h2"
                    className="send-inquiry"
                    sx={{
                      color: "rgb(38, 92, 129);",
                      fontSize: "24px",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    No products available!
                  </Typography>
                </Box>
              )}
            </div>
          )}
        </div>
      </Box>
    </main>
  );
}
