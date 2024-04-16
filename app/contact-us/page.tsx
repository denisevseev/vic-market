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
  const [subTitle, setSubTitle] = useState<string>("Don't miss it!");
  const [sectiontitle, setSectionTitle] = useState<string>(
    "Our Contact Information"
  );

  const [pageContactDetails, setPageContactDetails] = useState<any>({});

  const [contentTitle1, setContentTitle1] =
    useState<string>("Customer Service");

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
      setMainTitle("Don't miss it!");
      setSubTitle("We are Here");
      setSectionTitle("Our Contact Information");
      setContentTitle1("Customer Service");
    }
    if (from === "seller-details") {
      setMainTitle("Contact Us");
      setSubTitle("Don't miss it!");
      setSectionTitle("Our Contact Information");
      setContentTitle1("Customer Service");
    }

    if (from === "buyer-details") {
      setMainTitle("Contact Us");
      setSubTitle("Don't miss it!");
      setSectionTitle("Our Contact Information");
      setContentTitle1("Customer Service");
    }

    if (from === "legal") {
      setMainTitle("Contact Us");
      setSubTitle("Don't miss it!");
      setSectionTitle("Our Contact Information");
      setContentTitle1("Customer Service");
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
        title="Contact Us | Victorum Marketplace"
        description="Get in touch with the Victorum Marketplace team for support, service inquiries, or feedback. We are here to help you with any questions you may have."
        keywords="contact, support, customer service, inquiries, feedback, Victorum Marketplace"
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
              <Box className="contactUsTitleBg">
                <Typography className="contactUsTitleBgText">
                  {mainTitle}
                </Typography>
              </Box>
              {/* HEADLINE */}
              <Box>
                <Typography className="contactUsTitle">{subTitle}</Typography>
              </Box>
              {from !== "seller-details" && (
                <Box sx={{ maxWidth: "400px" }}>
                  <Typography className="contactUsTitle">
                    We are here to help!
                  </Typography>
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
                  If you have any questions about products and services relating
                  to everything to do with purchasing processes at Victorum, you
                  have come to the right place! Our helpdesk is available around
                  the clock, 7 days a week. Call us on{" "}
                  <a
                    href={
                      "tel:" + pageContactDetails.phone
                        ? pageContactDetails.phone
                        : globalDetails.phone
                    }
                  >
                    {pageContactDetails.phone
                      ? pageContactDetails.phone
                      : globalDetails.phone}
                  </a>
                  .
                </Typography>
              </Box>
            )}

            {from === "top-box" && pageContactDetails && (
              <Box>
                <Typography className="contactUsSubtitle">
                  If you are not a client yet, you can dial{" "}
                  <a
                    href={
                      "tel:" + pageContactDetails.phone
                        ? pageContactDetails.phone
                        : globalDetails.phone
                    }
                  >
                    {pageContactDetails.phone
                      ? pageContactDetails.phone
                      : globalDetails.phone}
                  </a>{" "}
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
                  <Typography className="contactUsSubtitle2">
                    Contact Email
                  </Typography>
                  <Typography className="contactUsSubtitle">
                    You can also write us a message to{" "}
                    <span
                      className="contactFormBelowText"
                      onClick={handleContactSellers}
                    >
                      {pageContactDetails?.email}
                    </span>{" "}
                    or use the
                    <span
                      style={{ marginLeft: "5px" }}
                      className="contactFormBelowText"
                      onClick={scrollToForm}
                    >
                      contact form below.
                    </span>
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
