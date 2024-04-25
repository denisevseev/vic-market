"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Box, Typography } from "@mui/material";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import HeadData from "../components/head";

import { globalDetails, contactDetails } from "../utils/constants";

function findContactByName(name: any) {
  name = name.replace("%20", " ");
  return contactDetails.find(
    (contact: any) => contact.search.toLowerCase() === name.toLowerCase()
  );
}

export default function ContactUs() {
  const formRef = useRef<HTMLDivElement>(null);

  const [from, setFrom] = useState<
    "top-box" | "seller-details" | "buyer-details" | "legal" | null
  >(null);

  const [mainTitle, setMainTitle] = useState<string>("Contact Us");
  const [subTitle, setSubTitle] = useState<string>("Contact Buyers´ Desks!");
  const [sectiontitle, setSectionTitle] = useState<string>(
    "Passionated purchasing experts"
  );

  const [pageContactDetails, setPageContactDetails] = useState<any>({});

  const [contentTitle1, setContentTitle1] = useState<string>(
    "Passionated purchasing experts"
  );

  const handleContactSellers = () => {
    const email = pageContactDetails.email
      ? pageContactDetails.email
      : globalDetails.email;
    window.location.href = "mailto:" + email;
  };

  const handleContactSupport = () => {
    const email = pageContactDetails.email
      ? pageContactDetails.email
      : globalDetails.email;
    window.location.href = "mailto:" + email;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const fromParam = searchParams.get("from");
      const branchParam = searchParams.get("branch");

      if (branchParam) {
        const findData = findContactByName(branchParam);
        if (findData) {
          setPageContactDetails(findData);
        } else {
          setPageContactDetails(globalDetails);
        }
      } else {
        setPageContactDetails(globalDetails);
      }

      if (
        fromParam === "top-box" ||
        fromParam === "seller-details" ||
        fromParam === "buyer-details" ||
        fromParam === "legal"
      ) {
        setFrom(fromParam);
      } else {
        setFrom(null);
      }
    }
  }, []);

  useEffect(() => {
    const phone = pageContactDetails.phone
      ? pageContactDetails.phone
      : globalDetails.phone;
    if (from === "top-box") {
      setMainTitle("Contact Buyers´ Desks!");
      setSubTitle("We are Here");
      setSectionTitle("Passionated purchasing experts");
      setContentTitle1("Passionated purchasing experts");
    }
    if (from === "seller-details") {
      setMainTitle("Contact Us");
      setSubTitle("Contact Buyers´ Desks!");
      setSectionTitle("Passionated purchasing experts");
      setContentTitle1("Passionated purchasing experts");
    }

    if (from === "buyer-details") {
      setMainTitle("Contact Us");
      setSubTitle("Contact Buyers´ Desks!");
      setSectionTitle("Passionated purchasing experts");
      setContentTitle1("Passionated purchasing experts");
    }

    if (from === "legal") {
      setMainTitle("Contact Us");
      setSubTitle("Contact Buyers´ Desks!");
      setSectionTitle("Passionated purchasing experts");
      setContentTitle1("Passionated purchasing experts");
    }
  }, [from]);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <HeadData
        title="Contact us | Victorum Trade"
        description="Get in touch with the Victorum Trade team for support, service inquiries, or feedback. We are here to help you with any questions you may have."
        keywords="contact, support, customer service, inquiries, feedback, Victorum Trade"
      />
      {/* FIRST SECTION */}
      <Box className="contactMainContainer">
        <Box className="titleHeadlineImgBg">
          <Box className="contactUsTitleHeadlineMW">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* TITLE */}
              {/* <Box className="contactUsTitleBg">
                <Typography className="contactUsTitleBgText">
                  {mainTitle}
                </Typography>
              </Box> */}
              {/* HEADLINE */}
              <Box>
                <Typography className="contactUsTitle">{subTitle}</Typography>
              </Box>
              {from !== "seller-details" && (
                <Box sx={{ maxWidth: "400px" }}>
                  {/* <Typography className="contactUsTitle">
                    We are here to help!
                  </Typography> */}
                </Box>
              )}
            </Box>
            <Box
              sx={{
                boxShadow: "0 5px 20px 0 rgba(46,61,73,.1)",
                borderRadius: "12px",
              }}
            >
              <Box className="contactUsBg"></Box>
            </Box>
          </Box>
        </Box>
        {/* TEXT */}
        <Box className="contactUsTextContainerPadding">
          <Box className="contactUstextContainer">
            <Box>
              <Typography className="contactUsSubtitle3">
                {sectiontitle}
              </Typography>
            </Box>
            <Box>
              <Typography className="contactUsSubtitle2">
                {contentTitle1}
              </Typography>
            </Box>
            {from === "top-box" ? (
              <Box>
                <Typography
                  className="contactUsSubtitle"
                  sx={{
                    marginBottom: "16px",
                  }}
                >
                  If you have a customer service question, please select your
                  local Victorum Service Number from the list below.
                </Typography>
              </Box>
            ) : (
              <Box>
                <Typography
                  className="contactUsSubtitle"
                  sx={{
                    marginBottom: "16px",
                  }}
                >
                  Let us find the best price for the products you want to buy
                  How this is possible? Keep in my mind, that is exactly the
                  huge difference between average execution-only sales platforms
                  and marketplaces and us! Our purchasing managers have
                  excellent contacts to producers and fabrics all over the world
                  and due to our high volumes we can very often negotiate much
                  better prices, then others. We are sure, that through our
                  worldwide rapidly growing network we are able to save your
                  money and to extend your product portfolio!
                </Typography>
              </Box>
            )}

            {from === "top-box" && pageContactDetails && (
              <Box>
                <Typography className="contactUsSubtitle">
                  If you are not a client yet, you can dial{" "}
                  <a
                    href={
                      "tel:" +
                      (pageContactDetails.phone
                        ? decodeURIComponent(pageContactDetails.phone)
                        : globalDetails.phone)
                    }
                  >
                    {pageContactDetails.phone
                      ? decodeURIComponent(pageContactDetails.phone)
                      : globalDetails.phone}
                  </a>
                  in order to reach our support desk.
                </Typography>
              </Box>
            )}
            <Box>
              {from === "top-box" ? (
                <>
                  <Typography className="contactUsSubtitle2">
                    Email and Working Hours
                  </Typography>
                  <Typography className="contactUsSubtitle">
                    You can also write us a message to{" "}
                    <span
                      className="contactFormBelowText"
                      onClick={handleContactSupport}
                    >
                      {pageContactDetails.email}
                    </span>{" "}
                    or use the
                    <span
                      style={{ marginLeft: "5px" }}
                      className="contactFormBelowText"
                      onClick={scrollToForm}
                    >
                      contact form below
                    </span>
                    {" - our support desk is available "}
                    Monday to Friday from 08h till 18h.
                  </Typography>
                </>
              ) : (
                <>
                  {/* <Typography className="contactUsSubtitle2">
                    Contact Email
                  </Typography> */}
                  <Typography className="contactUsSubtitle">
                  Call us on 00852
                  4610 4890 and let us find together the best price for the
                  products and goods you need! Drop us a line! No language
                  barriers - our native speakers will handle your request and
                  communicate with you in English, Chinese, Hindu, Russian,
                  Spanish and French. Just send us a message to
                  buyers-desk@victorum-group.com - we will reply to you as soon
                  as possible!
                  </Typography>
                </>
              )}
            </Box>
          </Box>
        </Box>
        <div ref={formRef}>
          <Box className="contactUsContainer">
            <ContactUsForm />
          </Box>
        </div>
      </Box>
    </main>
  );
}
