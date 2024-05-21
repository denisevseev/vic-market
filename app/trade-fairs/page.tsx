"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import TradeFairsJson from "../components/tradeFairs.json";
import TradeFairsGridItems from "../components/TradeFairGrid/TradeFairGridItems";

const countryNameMapping: { [key: string]: string } = {
  "Russian Federation": "Russia",
};

export default function TradeFairs() {
  const [tradFairs, setTradeFairs] = useState<any>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const getMappedCountryName = (country: any) => {
    return countryNameMapping[country] || country;
  };

  const filteredTradeFairs = tradFairs
    .filter((fair: any) => {
      const fairCountry = getMappedCountryName(fair.country);
      const selected = getMappedCountryName(selectedCountry);
      return selected === "All Regions" || fairCountry === selected;
    })
    .sort((a: any, b: any) => {
      return (
        new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
      );
    });

  useEffect(() => {
    setTradeFairs(TradeFairsJson);
    setIsLoading(false);
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    }
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
          {isLoading ? (
            <Box
              className="loaderBox"
              sx={{
                width: "max-content",
                marginLeft: 'auto',
                marginRight: 'auto',
                minHeight: "400px",
              }}
            >
              <CircularProgress sx={{ color: "rgb(38, 92, 129)" }} />
            </Box>
          ) : (
            <div
              className="other-page-wrap-start"
              style={{ marginBottom: "2rem" }}
            >
              {filteredTradeFairs.length > 0 ? (
                <TradeFairsGridItems
                  backAction={true}
                  title="Trade Fairs"
                  data={filteredTradeFairs}
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
                      position: "relative",
                      height: "200px",
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
                    No Trade fairs available!
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
