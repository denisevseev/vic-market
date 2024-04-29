"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./Footer.scss";
import { useRouter } from "next/navigation";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useCountryData } from "@/app/hooks/useCountryData";

const Footer = () => {
  const router = useRouter();
  const { data: countryData } = useCountryData();
  const handleNavigate = (path: string) => {
    router.push(path);
  };
  const isMobile = useMediaQuery("(max-width:600px)");
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <footer className="footerContainer">
      {isMobile ? (
        <div>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              sx={{
                "& .MuiAccordionSummary-content": {
                  margin: "0 !important", // Override margin
                },
              }}
              expandIcon={
                <ExpandMoreIcon sx={{ color: "rgb(255, 255, 255);" }} />
              }
            >
              <h4 className="title-color">About us</h4>
            </AccordionSummary>
            <AccordionDetails>
              <a href="/our-company">Our Company</a>
              <a href="https://www.victorum-group.com/" target="_blank">
                Victorum Group
              </a>
              <a href="/careers">Careers</a>
              <a href="/news">News</a>
              <a href="/press">Press</a>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              boxShadow: "none",
            }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              sx={{
                "& .MuiAccordionSummary-content": {
                  margin: "0 !important", // Override margin
                },
              }}
              expandIcon={
                <ExpandMoreIcon sx={{ color: "rgb(255, 255, 255);" }} />
              }
            >
              <h4 className="title-color">Our Services</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/#post-sell-request">Post Sell Request</Link>
              <a href="/newsletter">Get Our Newsletter</a>
              <a href="/market-research">Market Research</a>
              <Link href="/#post-buy-request">Corporate Finance</Link>
              <a href="/payments">Payments? VicPay!</a>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              boxShadow: "none",
            }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              sx={{
                "& .MuiAccordionSummary-content": {
                  margin: "0 !important", // Override margin
                },
              }}
              expandIcon={
                <ExpandMoreIcon sx={{ color: "rgb(255, 255, 255);" }} />
              }
            >
              <h4 className="title-color">For Sellers</h4>
            </AccordionSummary>
            <AccordionDetails>
              {/* <Link href="/#post-sell-request">Post Sell Request</Link> */}
              {/* <a>Market Research</a> */}
              {/* <Link href="/#contact-us">Contact Sellers´ Desk</Link> */}
              <Link
                href={{
                  pathname: "/contact-seller-desk",
                  query: { from: "seller-details", branch: "Main" },
                }}
              >
                Contact Sellers´ Desk
              </Link>
              {/* <Link href="/categories">Browse Our Categories</Link> */}
              <Link href="/successfull-seller">
                Are you a Successful Seller?
              </Link>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              boxShadow: "none",
            }}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              sx={{
                "& .MuiAccordionSummary-content": {
                  margin: "0 !important", // Override margin
                },
              }}
              expandIcon={
                <ExpandMoreIcon sx={{ color: "rgb(255, 255, 255);" }} />
              }
            >
              <h4 className="title-color">For Buyers</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/#post-buy-request">Post Buy Request</Link>
              <Link
                href={{
                  pathname: "/contact-buyers-desk",
                  query: { from: "buyer-details", branch: "Main" },
                }}
              >
                Contact Buyers´ Desk
              </Link>
              <Link href="/categories">Browse Our Categories</Link>
              <a>Our company</a>
              {/* <a>Contact Buyers´ Desk</a> */}
              <Link href="/book-of-profit">Buyers´ Book of Profit</Link>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              boxShadow: "none",
            }}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              sx={{
                "& .MuiAccordionSummary-content": {
                  margin: "0 !important", // Override margin
                },
              }}
              expandIcon={
                <ExpandMoreIcon sx={{ color: "rgb(255, 255, 255);" }} />
              }
            >
              <h4 className="title-color">Legal</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Link
                href={{
                  pathname: "/contact-us",
                  query: { from: "legal", branch: "Main" },
                }}
              >
                Contact
              </Link>
              {/* <a>Terms of Use</a> */}
              <a href="/terms-of-use">Terms of Use</a>
              <a href="/terms">T&Cs</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <Link href="/sitemap.xml">Sitemap</Link>
            </AccordionDetails>
          </Accordion>
        </div>
      ) : (
        <>
          <div className="footerSection">
            <h3>About us</h3>
            <a href="/our-company">Our Company</a>
            <a href="https://www.victorum-group.com/" target="_blank">
              Victorum Group
            </a>
            <a href="/careers">Careers</a>
            <a href="/news">News</a>
            <a href="/press">Press</a>
          </div>
          <div className="footerSection">
            <h3>Our Services</h3>
            <Link href="/#post-sell-request">Post Sell Request</Link>
            <a href="/newsletter">Get Our Newsletter</a>
            <a href="/market-research">Market Research</a>
            <Link href="/#post-buy-request">Corporate Finance</Link>
            <a href="/payments">Payments? VicPay!</a>
          </div>
          <div className="footerSection">
            <h3>For Sellers</h3>
            {/* <Link href="/#post-sell-request">Post Sell Request</Link> */}
            {/* <a>Market Research</a> */}
            <Link
              href={{
                pathname: "/contact-seller-desk",
                query: { from: "seller-details", branch: "Main" },
              }}
            >
              Contact Sellers´ Desk
            </Link>

            {/* <Link href="/categories">Browse Our Categories</Link> */}
            <Link href="/successfull-seller">Are you a Successful Seller?</Link>
          </div>
          <div className="footerSection">
            <h3>For Buyers</h3>
            <Link href="/#post-buy-request">Post Buy Request</Link>
            <Link
              href={{
                pathname: "/contact-buyers-desk",
                query: { from: "buyer-details", branch: "Main" },
              }}
            >
              Contact Buyers´ Desk
            </Link>
            <Link href="/categories">Browse Our Categories</Link>
            <a href="/our-company">Our company</a>
            {/* <a>Contact Buyers´ Desk</a> */}
            <Link href="/book-of-profit">Buyers´ Book of Profit</Link>{" "}
          </div>
          <div className="footerSection">
            <h3>Legal</h3>
            {/* <a>Terms of Use</a> */}
            <Link
              href={{
                pathname: "/contact-us",
                query: { from: "legal", branch: "Main" },
              }}
            >
              Contact
            </Link>
            <a href="/terms-of-use">Terms of Use</a>
            <a href="/terms">T&Cs</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </>
      )}

      <div className="footerCountries">
        <div className="countries">
          {countryData &&
            countryData.map((country) => (
              <React.Fragment key={country.id}>
                {/* Use an anchor tag for the full page reload */}
                <a
                  href={
                    `/contact-us?from=legal&branch=` + country.fallback_name
                  }
                >
                  {country.fallback_name}
                </a>
                <span>|</span>
              </React.Fragment>
            ))}
        </div>
      </div>

      <div className="footerBottom">
        <div className="all-rights-reserved ml-small-screen">
          © 2024 Victorum Holding Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
