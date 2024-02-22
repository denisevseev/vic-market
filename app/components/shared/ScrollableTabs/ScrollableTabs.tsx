"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ScrollableTabs.scss";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
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
      />
    </div>
  );
};

const SlideSmaller = ({ title, imgSrc }: any) => {
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
        {imgSrc && (
          <Box style={{ maxHeight: "50%", height: "100%" }}>
            <Image
              src={imgSrc}
              alt={title}
              width={100}
              height={100}
              // style={{ marginBottom: "16px" }}
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
        <p className="productNameText">{title}</p>
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
  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: false,
    slidesToShow: isUpcomingTradeshows ? 4 : isSmallCarousel ? 3 : 9,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: isUpcomingTradeshows
            ? 4 // Number of slides for upcoming tradeshows
            : isSmallCarousel
            ? 3
            : 8,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: isUpcomingTradeshows
            ? 3 // Choose the appropriate number for upcoming tradeshows
            : isSmallCarousel
            ? 2
            : 7,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: isUpcomingTradeshows
            ? 3 // Set slides for upcoming tradeshows
            : isSmallCarousel
            ? 2
            : 6,
            infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: isUpcomingTradeshows
            ? 3 // Set slides for upcoming tradeshows
            : isSmallCarousel
            ? 2
            : 5,
            infinite: true,
        },
      },
      {
        breakpoint: 975,
        settings: {
          slidesToShow: isUpcomingTradeshows
            ? 3 // Set slides for upcoming tradeshows
            : isSmallCarousel
            ? 1
            : 4,
            infinite: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: isUpcomingTradeshows
            ? 2 // Set slides for upcoming tradeshows
            : isSmallCarousel
            ? 1
            : 3,
            infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: isUpcomingTradeshows
            ? 1 // Set slides for upcoming tradeshows
            : isSmallCarousel
            ? 1
            : 2,
            infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <p
        style={{
          textAlign: "start",
          marginLeft: "2rem",
          fontSize: "18px",
          color: "#082F4A",
          fontStyle: "Helvetica",
        }}
      >
        {title}
      </p>
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
              <SlideSmaller
                key={index}
                title={slide.productName}
                imgSrc={slide.productImage}
              />
            )
          )}
        </Slider>
      </div>
    </div>
  );
}

export default VariableWidth;
