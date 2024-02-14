"use client";
import VariableWidth from "./components/shared/ScrollableTabs/ScrollableTabs";
import { Box } from "@mui/material";
import TopCategories from "./components/TopCategories/TopCategories";
import "../styles/HomePage.scss";
import PostBuyRequirement from "./components/PostBuyRequirement/PostBuyRequirement";
import DataJson from "./components/data.json";
import { useEffect, useState } from "react";
import DownloadOurApp from "./components/DownloadOurApp/DownloadOurApp";
import PopularLinks from "./components/shared/PopularLinks/PopularLinks";
import OurServices from "./components/OurServices/OurServices";
import TopCategoriesSlider from "./components/TopCategories/TopCategoriesSlider";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import HomepageImagesCarousel from "./components/HomepageImagesCarousel/HomepageImagesCarousel";
import ProductGrow from "./components/ProductGrow/ProductGrow";
import MoreValueAdds from "./components/MoreValueAdds/MoreValueAdds";

export default function Home() {
  const [data, setData] = useState<any>(null);

  const topCategories = [
    "Jackets",
    "T-Shirts",
    "LED Products",
    "Consumer Electronics",
    "Alloy Steel Pipes & Tubes",
    "Carbon Steel Pipes & Tubes",
    "Scientific Instruments",
    "Disposable Products",
    "Medical & Hospital Disposables",
  ];
  const popularProducts = [
    "Human Hair",
    "Solar Lights",
    "Pipe Elbows",
    "Backhoe Loader",
    "Carry Bag Making Machine",
    "Drum Lifter",
    "Scissor Lifts",
    "Industrial Vibrating Screen",
  ];

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
              <ProductGrow />
            </Box>
            <MoreValueAdds />
            <TopCategoriesSlider
              data={
                data &&
                data.data &&
                data.data.categories &&
                data.data.categories.topCategories
              }
            />
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
                  data.data.products.victorumCapitalTrusted
                }
                title="Victorum Capital Trusted"
                isSmallCarousel="true"
              />
            </div>
          </div>
          <PostBuyRequirement />
          {/* <div className="mb-2rem">
            <VariableWidth
              data={
                data &&
                data.data &&
                data.data.products &&
                data.data.products.upcomingTradeShows
              }
              title="Upcoming Tradeshows"
              isUpcomingTradeshows="true"
            />
          </div> */}
        </div>
        <OurServices />
        <DownloadOurApp />
        <PopularLinks title="Top Categories" links={topCategories} />
        <PopularLinks title="Popular Products" links={popularProducts} />
      </Box>
    </main>
  );
}
