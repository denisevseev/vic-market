"use client";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import "../../styles/HomePage.scss";
import { useEffect, useState } from "react";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import {
  getCategories,
  getFilteredProductsByCountry,
  processApiResponse,
} from "@/api/helper/dataFilter";
import VariableWidth from "../components/shared/ScrollableTabs/ScrollableTabs";
import { useMarketData } from "@/app/hooks/useMarketData";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from 'next/navigation';


export default function Categories({}) {
  const [featuredProducts, setFeaturedProducts] = useState<any>([]);
  const [categories, setCategories] = useState<any>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const router = useRouter();

  const navigateHome = () => {
    router.push('/');
  };


  const { data: marketData, isLoading } = useMarketData();

  useEffect(() => {
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    }
  }, [selectedCountry]);

  useEffect(() => {
    const fetchData = async () => {
      if (marketData) {
        const formated = processApiResponse(marketData);
        const categoriesData = await getCategories();
        setCategories(categoriesData);
        setFeaturedProducts(
          getFilteredProductsByCountry(formated, 100, selectedCountry)
        );
      }
    };

    fetchData();
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
          onClick={navigateHome}
            sx={{
              marginBottom: "17px",
              marginTop: {
                xs: "6rem",
                sm: "5rem",
                md: "1rem",
              },
            }}
          >
            <Box
              sx={{
                color: "#000",
                display: "flex",
                alignItems: "center",
                borderRadius: "4px",
                textDecoration: "none",
                width: "max-content",
                "&:hover": {
                  backgroundColor: "#d3d3d3",
                  cursor: "pointer",
                },
              }}
            >
              <IconButton
                aria-label="go back"
                sx={{
                  marginRight: "8px",
                  display: "flex",
                  "& svg": {
                    fontSize: "2.1rem",
                  },
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography
                sx={{
                  // You can add additional styles here for the text
                  fontSize: "20px", // Adjust font size
                  marginRight: "16px",
                }}
              >
                Back
              </Typography>
            </Box>
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
