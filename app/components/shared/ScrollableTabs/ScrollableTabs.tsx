"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ScrollableTabs.scss";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Box, Typography, useMediaQuery } from "@mui/material";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import InquiryModal from "../../FeaturedProducts/InquiryModal/InquiryModal";
import Link from "next/link";
import Default from "../../../../public/get-distributers.svg";
import { useRouter } from "next/navigation";

const SlideUpComing = ({ title, imgSrc, date, location, item }: any) => {
  const data = item ?? null;

  const router = useRouter();
  return (
    <div style={{ padding: "0 8px", maxHeight: "206px" }}>
      <div className="slideUpcoming">
        {imgSrc && (
          <div className="imageUpcoming">
            <Image
              onClick={() => router.push(`/trade-fair/${data?.id}`)}
              src={imgSrc}
              alt={title}
              width={80}
              height={80}
              style={{
                maxWidth: "80px",
                maxHeight: "80px",
                height: "auto",
                width: "auto",
                cursor: "pointer",
              }}
              className="ml-mr-auto"
            />
          </div>
        )}

        <div className="text-part-upcoming">
          <Link className="upcomingElipsis" href={`/trade-fair/${data?.id}`}>
            <p className="upcomingElipsis">{title}</p>
          </Link>

          {date && (
            <div className="d-flex ai-center gap-4">
              <DateRangeOutlinedIcon
                style={{ color: "#404D57", width: "16px", height: "17px" }}
              />
              <p className="upcomingDate">{date}</p>
            </div>
          )}
          {location && (
            <div className="d-flex ai-center gap-4">
              <FmdGoodOutlinedIcon
                style={{ color: "#404D57", width: "16px", height: "17px" }}
              />
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
        {data.productImage &&
        /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(data.productImage) ? (
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
        ) : (
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
              src={Default}
              alt={data.productName}
              width={110}
              height={80}
              style={{
                width: "auto",
                height: "auto",
                minWidth: "110px",
                minHeight: "80px",
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
            <p className="productInfoText">
              ${parseFloat(data?.productPrice)?.toFixed(2)}
            </p>
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
        imgSrc={
          data &&
          data.productImage &&
          data.productImage &&
          /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(data.productImage)
            ? data.productImage
            : "/get-distributers.svg"
        }
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
        {data.productImage &&
        /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(data.productImage) ? (
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
        ) : (
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
              src={Default}
              alt={data.productName}
              width={100}
              height={100}
              style={{
                cursor: "pointer",
                width: "auto",
                height: "auto",
                minWidth: "100px",
                minHeight: "100px",
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
          className="productNameText"
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
  isCategory,
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
          {isCategory
            ? data?.map((category: any, index: number) => (
                <div key={index}>
                  <div style={{ padding: "0 8px" }}>
                    <div className="slideCategory">
                      <div
                        className="text-part-upcoming"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        {" "}
                        <Link
                          className="productNameLink"
                          href={`/category/${category.categorySlug}`}
                        >
                          <p className="productNameText">
                            {category.fallback_name}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : data?.map((slide: any, index: any) =>
                isSmallCarousel ? (
                  <SlideBigger
                    key={index}
                    data={slide}
                    isSmallCarousel={isSmallCarousel}
                  />
                ) : isUpcomingTradeshows ? (
                  <SlideUpComing
                    key={index}
                    imgSrc={slide?.image}
                    title={slide?.event_name}
                    date={slide?.date}
                    location={`${slide?.event_name}, ${slide?.city}, ${slide?.country}`}
                    item={slide}
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
