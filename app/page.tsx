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
import { useMarketData } from "./hooks/useMarketData";
import { getFilteredProducts, getProductsSortedById, getRandomProducts, getRandomTopCategoriesWithItems, processApiResponse } from "@/api/helper/dataFilter";


export default function Home() {
  const [data, setData] = useState<any>(null);
  const [featuredProducts, setFeaturedProducts] = useState<any>([]);
  const [newArrivals, setNewArrivals] = useState<any>([]);
  const [tradingTrusted, setTradingTrusted] = useState<any>([]);
  
  const [categories, setCategories] = useState<any>(null);

  const {data: marketData, isLoading} = useMarketData()
  
  useEffect(() => {
    if(marketData){
      const formated = processApiResponse(marketData);
      setCategories(formated);
      setFeaturedProducts(getRandomProducts(formated,10));
      setNewArrivals(getProductsSortedById(formated,10));
      setTradingTrusted(getFilteredProducts(formated,10, ['description', 'quantity', 'manufacturerName', 'currency', 'productPrice']));
    }
  }, [marketData]);


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
    //handleMarketData();
  }, []);

  return (
    <main>
      <Box className="container">
        <Box className="firstSection">
          <TopCategories
            data={categories}
          />
          <Box className="carouselLookingForAndMoreValue">
            <Box className="homepageCarouselAndLookingForMainBox">
              <HomepageImagesCarousel />
              <ProductGrow />
            </Box>
            <MoreValueAdds />
            <TopCategoriesSlider
              data={categories}
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
            <FeaturedProducts
              data={featuredProducts}
            />
          </div>

          <div className="arriwals-trusted">
            <div>
              <VariableWidth
                data={newArrivals}
                title="New Arrivals"
                isSmallCarousel="true"
              />
            </div>
            <div>
              <VariableWidth
                data={tradingTrusted}
                title="Victorum Trading Trusted"
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
