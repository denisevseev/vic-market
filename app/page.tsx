import VariableWidth from "./components/shared/scrollable-tabs/scrollable-tabs";
import { Box } from "@mui/material";
import TopCategories from "./components/top-categories/Top-categories";
import MoreValueAdds from "./components/more-value-adds/More-value-adds";
import "../styles/homePage.scss";
import HomepageImagesCarousel from "./components/homepage-images-carousel/HomepageImagesCarousel";
import LookingForProductWantToGrowYourBusiness from "./components/looking-for-product-want-to-grow-your-business/looking-for-product-want-to-grow-your-business";

export default function Home() {
  const slidesData = [
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
  ];

  return (
    <main>
      <Box className="container">
        <Box className="firstSection">
          <TopCategories />
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
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "4rem",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <VariableWidth data={slidesData} title="Trending Categories" />
          </div>
          <div>
            <VariableWidth data={slidesData} title="Recent Blogs" />
          </div>
        </div>
      </Box>
    </main>
  );
}
