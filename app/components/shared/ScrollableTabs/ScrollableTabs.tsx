"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ScrollableTabs.scss";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Box, Typography, useMediaQuery } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import InquiryModal from "../../FeaturedProducts/InquiryModal/InquiryModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SlideUpComing = ({ title, imgSrc, date, location }: any) => {
  return (
    <div style={{ padding: "0 8px" }}>
      <div className="slideUpcoming">
        {imgSrc && (
          <div className="imageUpcoming">
            <Image
              src={imgSrc}
              alt={title}
              width={110}
              height={80}
              style={{
                maxWidth: "110px",
                maxHeight: "80px",
                height: "auto",
                width: "auto",
              }}
              className="ml-mr-auto"
            />
          </div>
        )}

        <div className="text-part-upcoming">
          <p className="upcomingElipsis">{title}</p>

          {date && (
            <div className="d-flex ai-center gap-4">
              <DateRangeIcon style={{ color: "grey" }} />
              <p className="upcomingDate">{date}</p>
            </div>
          )}
          {location && (
            <div className="d-flex ai-center gap-4">
              <div className="hide-sm">
                <EditLocationIcon style={{ color: "grey" }} />
              </div>
              <p className="upcomingElipsisLoc">{location}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
// upcoming end

// Slide component
const SlideBigger = (item: any) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const data = item.data ?? null;
  const router = useRouter();
  return (
    <div style={{ padding: "0 8px" }}>
      <div
        style={{
          width: "100%",
          height: item.isSmallCarousel ? "300px" : "200px",
          backgroundColor: "rgb(255, 255, 255)",
          border: "1px solid rgb(225, 230, 239)",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        {data.productImage && (
          <div
            style={{
              marginBottom: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "90px",
              height: "100px",
            }}
          >
            <Image
              onClick={() =>
                router.push(`/product/${data.productSlug}/${data.id}`)
              }
              src={data.productImage}
              alt={data.productName}
              width={110}
              height={80}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "110px",
                maxHeight: "80px",
                marginLeft: "auto",
                marginRight: "auto",
                cursor: "pointer",
              }}
            />
          </div>
        )}
        <hr
          style={{
            width: "100%",
            borderWidth: "0.5px",
            borderColor: "rgba(0, 0, 0, 0.1)",
            margin: "10px 0",
          }}
        />

        <Link
          className="productNameLink"
          href={`/product/${data.productSlug}/${data.id}`}
        >
          <p className="productNameText">{data.productName}</p>
        </Link>
        {/* Horizontal line */}
        <div className="text-part">
          {/* Optional information */}
          {data.productPrice && (
            <p className="productInfoText">${data.productPrice.toFixed(2)}</p>
          )}
          {data.quantity && (
            <p className="productInfoText">{data.quantity} QTY</p>
          )}
          {/* {data.categoryName && (
            <p className="productInfoText">Category: {data.categoryName}</p>
          )} */}

          {data.size && <p className="productInfoText">Size: {data.size}</p>}
          {data.units && <p className="productInfoText">Units: {data.units}</p>}
          {data.liters && (
            <p className="productInfoText">Liters: {data.liters}</p>
          )}
          {data.kilograms && (
            <p className="productInfoText">Kilograms: {data.kilograms}</p>
          )}
          {data.meter && <p className="productInfoText">Meter: {data.meter}</p>}
          {data.square && (
            <p className="productInfoText">Square: {data.square}</p>
          )}
        </div>
      </div>
      <button className="inquiryButtonProductSlider" onClick={handleOpenModal}>
        <Typography>Send Inquiry</Typography>
        <SendIcon />
      </button>
      <InquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        productName={data.productName}
        company={data.categoryName}
        imgSrc={data.productImage ?? "/get-distributers.svg"}
        id={data.id}
      />
    </div>
  );
};

const SlideSmaller = (item: any) => {
  const router = useRouter();
  const data = item.data ?? null;

  return (
    <div style={{ padding: "0 8px" }}>
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "rgba(109, 103, 89, 0.06)",
          border: "1px solid rgb(225, 230, 239)",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.productImage && (
          <Box
            style={{
              maxHeight: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              onClick={() =>
                router.push(`/product/${data.productSlug}/${data.id}`)
              }
              src={data.productImage}
              alt={data.productName}
              width={100}
              height={100}
              style={{
                cursor: "pointer",
                width: "auto",
                height: "auto",
                maxWidth: "100px",
                maxHeight: "100px",
              }}
            />
          </Box>
        )}
        {/* Horizontal line */}
        <hr
          style={{
            width: "100%",
            borderWidth: "0.5px",
            borderColor: "rgba(0, 0, 0, 0.1)",
            margin: "10px 0",
          }}
        />
        <Link
          className="titleLink"
          href={`/product/${data.productSlug}/${data.id}`}
        >
          <p className="productNameText">{data.productName}</p>
        </Link>
      </div>
    </div>
  );
};

const Slider = dynamic(() => import("react-slick").then((m) => m.default), {
  ssr: false,
});

function VariableWidth({
  data,
  title,
  isSmallCarousel,
  isUpcomingTradeshows,
}: any) {
  const isLargeScreen = useMediaQuery("(min-width: 1550px)");
  const isMediumScreen = useMediaQuery(
    "(max-width: 1549px) and (min-width: 1450px)"
  );
  const isSmallScreen = useMediaQuery(
    "(max-width: 1449px) and (min-width: 1300px)"
  );
  const isXSmallScreen = useMediaQuery(
    "(max-width: 1299px) and (min-width: 1200px)"
  );
  const isXXSmallScreen = useMediaQuery(
    "(max-width: 1199px) and (min-width: 975px)"
  );
  const isXXXSmallScreen = useMediaQuery(
    "(max-width: 974px) and (min-width: 750px)"
  );
  const isXXXXSmallScreen = useMediaQuery(
    "(max-width: 749px) and (min-width: 600px)"
  );
  const isXXXXXSmallScreen = useMediaQuery(
    "(max-width: 599px) and (min-width: 500px)"
  );
  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: false,
    slidesToShow: isLargeScreen
      ? isUpcomingTradeshows
        ? 4
        : isSmallCarousel
        ? 2 //3
        : 6
      : isMediumScreen
      ? isUpcomingTradeshows
        ? 3
        : isSmallCarousel
        ? 2
        : 4
      : isSmallScreen
      ? isUpcomingTradeshows
        ? 3
        : isSmallCarousel
        ? 2
        : 4
      : isXSmallScreen
      ? isUpcomingTradeshows
        ? 3
        : isSmallCarousel
        ? 2
        : 4
      : isXXSmallScreen
      ? isUpcomingTradeshows
        ? 3
        : isSmallCarousel
        ? 1
        : 4
      : isXXXSmallScreen
      ? isUpcomingTradeshows
        ? 2
        : isSmallCarousel
        ? 1
        : 3
      : isXXXXSmallScreen
      ? isUpcomingTradeshows
        ? 1
        : isSmallCarousel
        ? 1
        : 2
      : isXXXXXSmallScreen
      ? 1
      : 1,
  };

  return (
    <div className="slider-container">
      <h2
        style={{
          textAlign: "start",
          marginLeft: "2rem",
          fontSize: "18px",
          color: "#082F4A",
          fontStyle: "Helvetica",
        }}
      >
        {title}
      </h2>
      <div style={{ margin: "20px" }}>
        <Slider {...slickSettings}>
          {data?.map((slide: any, index: any) =>
            isSmallCarousel ? (
              <SlideBigger
                key={index}
                data={slide}
                isSmallCarousel={isSmallCarousel}
              />
            ) : isUpcomingTradeshows ? (
              <SlideUpComing
                key={index}
                imgSrc={slide.productImage}
                title={slide.productName}
                date={null}
                location={null}
              />
            ) : (
              <SlideSmaller key={index} data={slide} />
            )
          )}
        </Slider>
      </div>
    </div>
  );
}

export default VariableWidth;
