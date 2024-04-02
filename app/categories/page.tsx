"use client";
import { Box, CircularProgress, IconButton } from "@mui/material";
import "../../styles/HomePage.scss";
import { useEffect, useState } from "react";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import {
  getFilteredProductsByCountry,
  processApiResponse,
} from "@/api/helper/dataFilter";
import VariableWidth from "../components/shared/ScrollableTabs/ScrollableTabs";
import { useMarketData } from "@/app/hooks/useMarketData";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Categories({}) {
  const [featuredProducts, setFeaturedProducts] = useState<any>([]);
  const [categories, setCategories] = useState<any>(null);
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
      setCategories(formated);
      setFeaturedProducts(
        getFilteredProductsByCountry(formated, 100, selectedCountry)
      );
    }
  }, [marketData, selectedCountry]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <Box
            sx={{
              marginBottom: "17px",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#000",
                textDecoration: "none",
              }}
            >
              <IconButton aria-label="go back">
                <ArrowBackIcon />
              </IconButton>
              Back
            </Link>
          </Box>
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
            <>
              <VariableWidth
                data={categories}
                title="Categories"
                isCategory="true"
              />
              <div
                className="other-page-wrap-start"
                style={{ marginBottom: "2rem" }}
              >
                <FeaturedProducts
                  backAction={false}
                  title={""}
                  data={featuredProducts}
                />
              </div>
            </>
          )}
        </div>
      </Box>
    </main>
  );
}
