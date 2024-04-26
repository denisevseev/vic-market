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
  const [subTitle, setSubTitle] = useState<string>(
    "We are glad to help you - visit us or give us a call!!"
  );
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
      setMainTitle("We are glad to help you - visit us or give us a call!!");
      setSubTitle("We are Here");
      setSectionTitle("Our Contact Information");
      setContentTitle1("Customer Service");
    }
    if (from === "seller-details") {
      setMainTitle("Contact Us");
      setSubTitle("We are glad to help you - visit us or give us a call!!");
      setSectionTitle("Our Contact Information");
      setContentTitle1("Customer Service");
    }

    if (from === "buyer-details") {
      setMainTitle("Contact Us");
      setSubTitle("We are glad to help you - visit us or give us a call!!");
      setSectionTitle("Our Contact Information");
      setContentTitle1("Customer Service");
    }

    if (from === "legal") {
      setMainTitle("Contact Us");
      setSubTitle("We are glad to help you - visit us or give us a call!!");
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
              <Box className="contactUsTitleBg">
                <Typography className="contactUsTitleBgText">
                  {mainTitle}
                </Typography>
              </Box>
              {/* HEADLINE */}
              <Box>
                <Typography className="contactUsTitle">{subTitle}</Typography>
              </Box>
              {/* {from !== "seller-details" && (
                <Box sx={{ maxWidth: "400px" }}>
                  <Typography className="contactUsTitle">
                    We are here to help!
                  </Typography>
                </Box>
              )} */}
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
              <Typography
                className="contactUsSubtitle3"
                sx={{ marginBottom: "24px" }}
              >
                {sectiontitle}
              </Typography>
            </Box>
            <Box>
              <Typography
                className="contactUsSubtitle2"
                sx={{ marginBottom: "16px" }}
              >
                No matter what, no matter when - we are there for you!
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
                  If you have any questions about products and services related
                  to our company or our services, we are there to help you.
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
                  If you have any questions about products and services related
                  to our company or our services, we are there to help you. 
                </Typography>

                <Typography
                  className="contactUsSubtitle"
                  sx={{
                    marginBottom: "16px",
                  }}
                >
                 Our
                  dedicated team supports you in English, Chinese, Hindu,
                  Russian, Spanish and French and is available around the clock,
                  7 days a week!
                </Typography>

                <Typography
                  className="contactUsSubtitle"
                  sx={{
                    marginBottom: "16px",
                  }}
                >
                  Just call us on 00852 4610 4890. You want to drop us a line?
                  You can also reach out to us writing a message
                  support@victorum-group.com or use the contact form below.
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
