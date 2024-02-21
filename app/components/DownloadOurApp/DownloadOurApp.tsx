"use client";
import "./DownloadOurApp.scss";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DownloadAppMobileImage from "../../../public/downloadOurNewApp.png";
import QRCodeImage from "../../../public/qrCodeFinance.png";
import GooglePlayImage from "../../../public/googlePlayImage.svg";
import AppStoreImage from "../../../public/appStoreImage.svg";
import Link from "next/link";

export default function DownloadOurApp() {
  const financeLink = "https://victorum-finance.com/";
  return (
    <Box>
      <Box className="downloadOurAppMainBox">
        <Box className="downloadOurAppMain">
          <Box className="mobileImagesBox">
            <Image
              height={412}
              width={206}
              style={{ objectFit: "cover" }}
              src={DownloadAppMobileImage}
              alt="Download Our New App"
            />
          </Box>
          <Box className="downloadOurAppBox">
            <Typography className="downloadOurAppText">
              Download Our Payment App
            </Typography>
            <Typography className="scanTheQrCodeText">
              Scan the QR code to download our payment app to your smartphone
            </Typography>
            <Box className="qrCodeStoresImageBox">
              <Box className="qrCodeImageBox">
                <Image
                  height={130}
                  width={130}
                  style={{ objectFit: "cover" }}
                  src={QRCodeImage}
                  alt="QR Code"
                />
              </Box>
              <Box className="storesImagesBox">
                <Link href={financeLink} target="_blank">
                  <Image
                    height={48}
                    width={160}
                    style={{ objectFit: "cover", cursor: "pointer" }}
                    src={GooglePlayImage}
                    alt="Google Play Image"
                  />
                </Link>
                <Link href={financeLink} target="_blank">
                  <Image
                    height={48}
                    width={160}
                    style={{ objectFit: "cover", cursor: "pointer" }}
                    src={AppStoreImage}
                    alt="App Store Image"
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="downloadMobileBox">
        <Link href={financeLink} target="_blank">
          <Image
            height={48}
            width={160}
            style={{ objectFit: "cover", cursor: "pointer" }}
            src={GooglePlayImage}
            alt="Google Play Image"
          />
        </Link>
        <Link href={financeLink} target="_blank">
          <Image
            height={48}
            width={160}
            style={{ objectFit: "cover", cursor: "pointer" }}
            src={AppStoreImage}
            alt="App Store Image"
          />
        </Link>
      </Box>
    </Box>
  );
}
