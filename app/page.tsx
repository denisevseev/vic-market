"use client";
import VariableWidth from "./components/shared/scrollable-tabs/ScrollableTabs";
import { Box } from "@mui/material";
import TopCategories from "./components/top-categories/TopCategories";
import MoreValueAdds from "./components/more-value-adds/MoreValueAdds";
import "../styles/homePage.scss";
import HomepageImagesCarousel from "./components/homepage-images-carousel/HomepageImagesCarousel";
import LookingForProductWantToGrowYourBusiness from "./components/looking-for-product-want-to-grow-your-business/LookingForProductWantToGrowYourBusiness";
import FeaturedProducts from "./components/features-products/FeaturedProducts";
import PostBuyRequirement from "./components/PostBuyRequirement/PostBuyRequirement";
import DataJson from "./components/data.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setData(DataJson);
  }, []);

  return (
    <main>
      <Box className="container">
        <Box className="firstSection">
          <TopCategories
            data={
              data &&
              data.data &&
              data.data.categories &&
              data.data.categories.topCategories
            }
          />
          <Box className="carouselLookingForAndMoreValue">
            <Box className="homepageCarouselAndLookingForMainBox">
              <HomepageImagesCarousel />
              <LookingForProductWantToGrowYourBusiness />
            </Box>
            <MoreValueAdds />
          </Box>
        </Box>
        <div
          style={{
            width: "98%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "4rem",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <VariableWidth
              data={
                data &&
                data.data &&
                data.data.categories &&
                data.data.categories.trendingCategories
              }
              title="Trending Categories"
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <FeaturedProducts
              data={
                data &&
                data.data &&
                data.data.products &&
                data.data.products.featuredProducts
              }
            />
          </div>

          <div className="arriwals-trusted">
            <div>
              <VariableWidth
                data={
                  data &&
                  data.data &&
                  data.data.products &&
                  data.data.products.newArrivals
                }
                title="New Arrivals"
                isSmallCarousel="true"
              />
            </div>
            <div>
              <VariableWidth
                data={
                  data &&
                  data.data &&
                  data.data.products &&
                  data.data.products.tradeIndiaTrusted
                }
                title="Victorum Capital Trusted"
                isSmallCarousel="true"
              />
            </div>
          </div>
          <PostBuyRequirement />
        </div>
      </Box>
    </main>
  );
}
