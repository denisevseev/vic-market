"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import OurCoreValue from "../../public/service-num.jpeg";
import OurCoreValue2 from "../../public/email-logo-2.png";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import HeadData from "../components/head";

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

  const [contentTitle1, setContentTitle1] =
    useState<string>("Customer Service");
  const [contentDesc1, setContentDesc1] = useState<string>(
    "If you have a customer service question, please select your local Victorum Service Number from the list below."
  );

  const [contentTitle2, setContentTitle2] = useState<string>("Contact Email");
  const [contentDesc2, setContentDesc2] = useState<string>(
    "You can also write us a message to sellers-desk@ghhjjhg or use the contact form below."
  );

  // Contact Sellers´ Desk {from: seller-details}
  // Contact Buyers´ Desk {from: buyer-details}
  // Contact (Legal) { from: "legal" }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const fromParam = searchParams.get("from");
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
    console.log("from", from);

    if (from === "top-box") {
      setMainTitle("Don't miss it!");
      setSubTitle("We are Here");
      setSectionTitle("Our Contact Information");
      setContentTitle1("Customer Service");
      setContentDesc1(
        "If you have a customer service question, please select your local Victorum Service Number from the list below."
      );
      setContentTitle2("Email and Working Hours");
      setContentDesc2(
        "You can also write us a message to support@xxxxx or use the contact form below - our support desk is available Monday to Friday from 08h till 18h."
      );
    }
    if (from === "seller-details") {
      setMainTitle("Contact Us");
      setSubTitle("Don't miss it!");
      setSectionTitle("Our Contact Information");
      setContentTitle1("Customer Service");
      setContentDesc1(
        "If you have any questions about products and services relating to everything to do with purchasing processes at Victorum, you have come to the right place! Our helpdesk is available around the clock, 7 days a week. Call us on 123 XXX XXX."
      );
      setContentTitle2("Contact Email");
      setContentDesc2(
        "You can also write us a message to sellers-desk@ghhjjhg or use the contact form below."
      );
    }

    if (from === "buyer-details") {
      setMainTitle("Contact Us");
      setSubTitle("Don't miss it!");
      setSectionTitle("Our Contact Information");
      setContentTitle1("Customer Service");
      setContentDesc1(
        "If you have any questions about products and services relating to everything to do with purchasing processes at Victorum, you have come to the right place! Our helpdesk is available around the clock, 7 days a week. Call us on 123 XXX XXX."
      );
      setContentTitle2("Contact Email");
      setContentDesc2(
        "You can also write us a message to sellers-desk@ghhjjhg or use the contact form below."
      );
    }

    if (from === "legal") {
      setMainTitle("Contact Us");
      setSubTitle("Don't miss it!");
      setSectionTitle("Our Contact Information");
      setContentTitle1("Customer Service");
      setContentDesc1(
        "If you have any questions about products and services relating to everything to do with purchasing processes at Victorum, you have come to the right place! Our helpdesk is available around the clock, 7 days a week. Call us on 123 XXX XXX."
      );
      setContentTitle2("Contact Email");
      setContentDesc2(
        "You can also write us a message to sellers-desk@ghhjjhg or use the contact form below."
      );
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
      <Box>
        {/* FIRST SECTION */}
        <Box className="aboutUsMainBox">
          <Box className="firstSectionAboutUs">
            <Box className="badgeAboutUs">
              <Typography className="badgeAboutUsText">{mainTitle}</Typography>
            </Box>

            <Box className="mainHeadingAboutUs">
              <Typography className="mainHeadingAboutUsText" color={"#21130d"}>
                {subTitle}
              </Typography>

              {from !== "seller-details" && (
                <Box className="digitallySakshamTextsBox">
                  <Typography
                    className="mainHeadingAboutUsText"
                    color={"#2a5182"}
                  >
                    We are Here
                  </Typography>
                  <Typography
                    color={"#21130d"}
                    className="mainHeadingAboutUsText"
                  >
                    to Help!
                  </Typography>
                </Box>
              )}
            </Box>

            <Box className="mainHeadingContent"></Box>
          </Box>
        </Box>

        {/* SECOND SECTION */}
        <Box className="fifthSectionMain">
          <Box className="fifthSectionBox">
            <Box className="fifthSectionContent">
              <Typography className="meetOurForceText">
                {sectiontitle}
              </Typography>
              <Box className="ourCoreValueItems">
                <Box className="ourCoreValuesItemImage">
                  <Image
                    src={OurCoreValue}
                    width={509}
                    height={284}
                    layout="responsive"
                    style={{ height: "100%" }}
                    alt="Customer Service"
                  />
                </Box>
                <Box className="ourCoreValuesItemContent">
                  <Typography className="ourCoreValueContentHeading">
                    {contentTitle1}
                  </Typography>

                  {from === "top-box" ? (
                    <Typography
                      className="ourCoreValueContentDesc"
                      sx={{
                        marginBottom: "16px",
                      }}
                    >
                      If you have a customer service question, please select
                      your local Victorum Service Number from the list below.
                    </Typography>
                  ) : (
                    <Typography
                      className="ourCoreValueContentDesc"
                      sx={{
                        marginBottom: "16px",
                      }}
                    >
                      If you have any questions about products and services
                      relating to everything to do with purchasing processes at
                      Victorum, you have come to the right place! Our helpdesk
                      is available around the clock, 7 days a week. Call us on
                      <b style={{ marginLeft: "3px" }}> 123 XXX XXX.</b>
                    </Typography>
                  )}

                  {from === "top-box" ? (
                    <Typography className="ourCoreValueContentDesc">
                      If you are not a client yet, you can dial 00000000 in
                      order to reach our support desk.
                    </Typography>
                  ) : null}
                </Box>
              </Box>

              <Box className="ourCoreValueItems2">
                <Box className="ourCoreValuesItemImage">
                  <Image
                    src={OurCoreValue2}
                    width={509}
                    style={{ height: "100%" }}
                    layout="responsive"
                    height={284}
                    alt="Constant Learning"
                  />
                </Box>

                {from === "top-box" ? (
                  <Box className="ourCoreValuesItemContent">
                    <Typography className="ourCoreValueContentHeading">
                      Email and Working Hours
                    </Typography>
                    <Typography className="ourCoreValueContentDesc">
                      You can also write us a message to support@xxxxx or use
                      the
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                          marginLeft: "6px",
                        }}
                        onClick={scrollToForm}
                      >
                        contact form below
                      </span>
                      {" - our support desk is available "}
                      <b>Monday to Friday from 08h till 18h.</b>
                    </Typography>
                  </Box>
                ) : (
                  <Box className="ourCoreValuesItemContent">
                    <Typography className="ourCoreValueContentHeading">
                      Contact Email
                    </Typography>
                    <Typography className="ourCoreValueContentDesc">
                      You can also write us a message to{" "}
                      <b>sellers-desk@ghhjjhg </b>or use the
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                          marginLeft: "6px",
                        }}
                        onClick={scrollToForm}
                      >
                        contact form below.
                      </span>
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "50px",
          }}
        >
          <div ref={formRef}>
            <ContactUsForm />
          </div>
        </div>
      </Box>
    </main>
  );
}
