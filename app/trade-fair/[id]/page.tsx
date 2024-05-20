"use client";
import "./trade-fair.scss";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import tradeFairData from "../../../app/components/tradeFairs.json";
import Image from "next/image";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

type TradeFairItem = {
  id: string;
  date: string;
  event_name: string;
  country: string;
  category: string;
  city: string;
  content: string;
  image: any;
};

const TradeFairItem = () => {
  const [tradeFair, setTradeFair] = useState<TradeFairItem | null>(null);

  useEffect(() => {
    const pathname = window.location.pathname;

    const id = pathname
      .replace(/^\/|\/$/g, "")
      .split("/")
      .pop();

    if (id) {
      const fetchTradeFairItem = async () => {
        try {
          const foundEvent = tradeFairData.find((item: any) => item.id === id);

          if (foundEvent) {
            setTradeFair(foundEvent);
          } else {
            console.error("Event not found");
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchTradeFairItem();
    }
  }, []);

  const renderContent = (content: string) => {
    return content.split("\n").map((paragraph, index) => (
      <Typography key={index} className="aboutTextContent">
        {paragraph}
        {index !== content.split("\n").length - 1 && <br />}{" "}
      </Typography>
    ));
  };

  return (
    <main>
      <Box className="container tradeFairMain">
        <Box
          style={{
            width: "98%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "4rem",
          }}
        >
          {!tradeFair ? (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "400px",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Box>
              <Box className="tradeFairImgTitleTimeLoc">
                <Image
                  src={tradeFair.image}
                  alt="Trade Fair"
                  className="fairTradeImage"
                  width={100}
                  height={105}
                />
                <Box>
                  <Box>
                    <Typography className="eventNameText">
                      {tradeFair?.event_name}
                    </Typography>
                  </Box>
                  <Box className="tradeFairItemTextTop">
                    <AccessTimeOutlinedIcon
                      style={{
                        color: "rgb(79, 95, 109)",
                        width: "15px",
                        height: "15px",
                      }}
                    />
                    <Typography className="tradeFairTime">
                      {tradeFair?.date}
                    </Typography>
                  </Box>
                  <Box className="tradeFairItemTextTop">
                    <FmdGoodOutlinedIcon
                      style={{
                        color: "rgb(79, 95, 109)",
                        width: "16px",
                        height: "16px",
                      }}
                    />
                    <Typography className="tradeFairLoc">
                      {tradeFair?.event_name}, {tradeFair?.city},{" "}
                      {tradeFair?.country}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} />
              <Box className="tradeFairAboutBox">
                <Typography className="aboutTradeFairText">
                  {" "}
                  About {tradeFair.event_name}
                </Typography>
                <Typography className="aboutTextContent">
                  {renderContent(tradeFair?.content || "")}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </main>
  );
};

export default TradeFairItem;
