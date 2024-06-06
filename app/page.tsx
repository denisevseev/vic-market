"use client";
import VariableWidth from "./components/shared/ScrollableTabs/ScrollableTabs";
import { Box } from "@mui/material";
import TopCategories from "./components/TopCategories/TopCategories";
import "../styles/HomePage.scss";
import PostBuyRequirement from "./components/PostBuyRequirement/PostBuyRequirement";
import DataJson from "./components/data.json";
import TradeFairsJson from "./components/tradeFairs.json";
import { useEffect, useRef, useState } from "react";
import DownloadOurApp from "./components/DownloadOurApp/DownloadOurApp";
import OurServices from "./components/OurServices/OurServices";
import TopCategoriesSlider from "./components/TopCategories/TopCategoriesSlider";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import HomepageImagesCarousel from "./components/HomepageImagesCarousel/HomepageImagesCarousel";
import ProductGrow from "./components/ProductGrow/ProductGrow";
import MoreValueAdds from "./components/MoreValueAdds/MoreValueAdds";
import { useMarketData } from "./hooks/useMarketData";
import HeadData from "./components/head";
import {
  getCategories,
  getFilteredProducts,
  getProductsSortedById,
  getRandomProducts,
  processApiResponse,
} from "@/api/helper/dataFilter";
import TopCategoriesLinks from "./components/shared/PopularLinks/TopCategoriesLinks";
import PopularProductsLink from "./components/shared/PopularLinks/PopularProductsLinks";

const countryNameMapping: { [key: string]: string } = {
  "Russian Federation": "Russia",
};

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [featuredProducts, setFeaturedProducts] = useState<any>([]);
  const [newArrivals, setNewArrivals] = useState<any>([]);
  const [tradingTrusted, setTradingTrusted] = useState<any>([]);
  const [latestTrands, setLatestTrands] = useState<any>([]);
  const [tradFairs, setTradeFairs] = useState<any>([]);
  const [categories, setCategories] = useState<any>(null);
  const { data: marketData, isLoading } = useMarketData();
  const postBuyRequirementRef = useRef<HTMLDivElement>(null);
  const postSellRequirementRef = useRef<HTMLDivElement>(null);
  const serivesRef = useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = useState("All Regions");

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

  const scrollToPostBuyRequirement = () => {
    if (postBuyRequirementRef.current) {
      postBuyRequirementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPostSellRequirement = () => {
    if (postSellRequirementRef.current) {
      postSellRequirementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    if (serivesRef.current) {
      serivesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (window.location.hash === "#post-buy-request") {
      scrollToPostBuyRequirement();
    }
    if (window.location.hash === "#post-sell-request") {
      scrollToPostSellRequirement();
    }
    if (window.location.hash === "#services") {
      scrollToServices();
    }
    setData(DataJson);
    setTradeFairs(TradeFairsJson);
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (marketData) {
        const formated = processApiResponse(marketData);
        const categoriesData = await getCategories();
        setCategories(categoriesData);
        setFeaturedProducts(getRandomProducts(formated, 10));
        setNewArrivals(getProductsSortedById(formated, 10));
        setLatestTrands(getFilteredProducts(formated, 10, ["description"]));
        setTradingTrusted(
          getFilteredProducts(formated, 10, [
            "description",
            "quantity",
            "manufacturerName",
            "currency",
            "productPrice",
          ])
        );
      }
    };

    fetchData();
  }, [marketData]);

  return (
    <main>
      <HeadData
        title="Home | Victorum Trade"
        description="Discover and purchase a wide range of products across multiple categories at Victorum Trade."
        keywords="trade, products, food and drink, buildingmaterials, pet supplies, electronics, fashion, home, garden, clothes, sports and hobbies, pet suppliesmachines vehicles, drugstore"
      />
      <Box className="container">
        <Box className="firstSection">
          <TopCategories data={categories && categories.slice(0, 10)} />
          <Box className="carouselLookingForAndMoreValue">
            <Box
              className="homepageCarouselAndLookingForMainBox"
              ref={postSellRequirementRef}
              id="post-sell-request"
            >
              <HomepageImagesCarousel />
              <ProductGrow
                scrollToPostBuyRequirement={scrollToPostBuyRequirement}
              />
            </Box>
            <MoreValueAdds />
            <TopCategoriesSlider data={categories && categories.slice(0, 10)} />
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
          <div className="mb-2rem">
            <VariableWidth data={latestTrands} title="Latest Trends" />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <FeaturedProducts data={featuredProducts} />
          </div>

          <div className="arriwals-trusted">
            <div>
              <VariableWidth
                data={newArrivals}
                title="New in Stock"
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
          <div ref={postBuyRequirementRef} id="post-buy-request">
            <PostBuyRequirement />
          </div>
          {filteredTradeFairs && filteredTradeFairs.length > 0 && (
            <div className="mb-2rem">
              <VariableWidth
                data={filteredTradeFairs}
                title="Trade Fair"
                isUpcomingTradeshows="true"
              />
            </div>
          )}
        </div>
        <div ref={serivesRef} id="services">
          <OurServices />
        </div>
        <DownloadOurApp />
        <TopCategoriesLinks data={categories} />
        <PopularProductsLink data={tradingTrusted} />
      </Box>
    </main>
  );
}
