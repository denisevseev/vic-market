"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ScrollableTabs.scss";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Box } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EditLocationIcon from "@mui/icons-material/EditLocation";

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
  const data = item.data ?? null;
  console.log("slider bigger", item);
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
              src={data.productImage}
              alt={data.productName}
              width={110}
              height={80}
              style={{
                // marginBottom: "16px",
                marginLeft: "auto",
                marginRight: "auto",
                // marginTop: "5px",
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

        <div className="text-part">
          <p
            style={{
              color: "rgb(45, 56, 64)",
              fontWeight: "500",
              zIndex: 2,
              position: "relative",
              fontSize: "14px",
              marginBottom: "8px",
              textAlign: "center",
              // Additional styles for fixed height and ellipsis
              height: "20px", // Set a fixed height based on your design needs
              overflow: "hidden", // Hide overflow
              textOverflow: "ellipsis", // Show an ellipsis for overflowed text
              display: "-webkit-box", // Necessary for the line clamp to work
              WebkitLineClamp: 1, // Limit the text to 2 lines
              WebkitBoxOrient: "vertical", // Display content vertically for the clamp to work
              lineHeight: "20px", // Adjust based on your font size for proper line spacing
            }}
          >
            {data.productName} naziv
          </p>
          {/* Horizontal line */}

          {/* Optional information */}
          {data.productPrice && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              ${data.productPrice.toFixed(2)}
            </p>
          )}
          {data.quantity && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              {data.quantity} QTY
            </p>
          )}
          {/*data.categoryName && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Category: {data.categoryName}
            </p>
          )*/}

          {data.size && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Size: {data.size}
            </p>
          )}
          {data.units && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Units: {data.units}
            </p>
          )}
          {data.liters && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Liters: {data.liters}
            </p>
          )}
          {data.kilograms && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Kilograms: {data.kilograms}
            </p>
          )}
          {data.meter && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Meter: {data.meter}
            </p>
          )}
          {data.square && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Square: {data.square}
            </p>
          )}
        </div>
      </div>
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
        <p
          style={{
            color: "rgb(45, 56, 64)",
            fontWeight: "500",
            zIndex: 2,
            position: "relative",
            fontSize: "14px",
            textAlign: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
            height: "40px", // Set a fixed height
            overflow: "hidden", // Hide overflow
            textOverflow: "ellipsis", // Show an ellipsis for overflowed text
            display: "-webkit-box", // Use webkit-box to enable line clamping
            WebkitLineClamp: 2, // Number of lines to show
            WebkitBoxOrient: "vertical", // Orient the text vertically
            lineHeight: "20px", // Set line height to manage spacing between lines
          }}
        >
          {title}
        </p>
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
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
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
