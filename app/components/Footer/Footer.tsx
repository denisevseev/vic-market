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
          {/* <Accordion
            sx={{
              boxShadow: "none",
            }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
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
              <h4 className="title-color">Customer Support</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/help">Help Center</Link>
              <Link href="/help">User Guide</Link>
              <Link href="/help">Return & Cancellation</Link>
              <Link href="/help">Policy</Link>
              <Link href="/help">Shipping & Delivery Policy</Link>
            </AccordionDetails>
          </Accordion> */}

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
              <p>Our Company</p>
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
              <Link href="/#post-buy-request">Post Buy Request</Link>
              <Link href="/#post-sell-request">Post Sell Request</Link>
              <a>Market Research</a>
              <a href="/newsletter">Get Our Newsletter</a>
              <a href="http://vicpayments.com/" target="_blank">
                Payments? VicPay!
              </a>
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
              <Link href="/#post-sell-request">Post Sell Request</Link>
              <a>Market Research</a>
              {/* <Link href="/#contact-us">Contact Sellers´ Desk</Link> */}
              <Link
                href={{
                  pathname: "/contact-us",
                  query: { from: "seller-details" },
                }}
              >
                Contact Sellers´ Desk
              </Link>
              <Link href="/#services">Browse Our Categories</Link>
              <Link href="/help">Whitepaper</Link>
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
              <a>Market Research</a>
              <a>Contact Buyers´ Desk</a>
              <Link href="/#post-sell-request">Browse Our Categories</Link>
              <Link href="/help">Buyer´s Guide to Success</Link>
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
              {/* <a>Terms of Use</a> */}
              <a href="/terms">T&Cs</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <Link
                href={{
                  pathname: "/contact-us",
                  query: { from: "seller-details" },
                }}
              >
                Contact
              </Link>
              <Link href="/help">Sitemap</Link>
            </AccordionDetails>
          </Accordion>
        </div>
      ) : (
        <>
          <div className="footerSection">
            <h3>About us</h3>
            <a>Our Company</a>
            <a href="https://www.victorum-group.com/" target="_blank">
              Victorum Group
            </a>
            <a href="/careers">Careers</a>
            <a href="/news">News</a>
            <a href="/press">Press</a>
          </div>
          <div className="footerSection">
            <h3>Our Services</h3>
            <Link href="/#post-buy-request">Post Buy Request</Link>
            <Link href="/#post-sell-request">Post Sell Request</Link>
            <a>Market Research</a>
            <a href="/newsletter">Get Our Newsletter</a>
            <a href="http://vicpayments.com/" target="_blank">
              Payments? VicPay!
            </a>
          </div>
          <div className="footerSection">
            <h3>For Sellers</h3>
            <Link href="/#post-sell-request">Post Sell Request</Link>
            <a>Market Research</a>
            <Link
              href={{
                pathname: "/contact-us",
                query: { from: "seller-details" },
              }}
            >
              Contact Sellers´ Desk
            </Link>

            <Link href="/#services">Browse Our Categories</Link>
            <Link href="/help">Whitepaper</Link>
          </div>
          <div className="footerSection">
            <h3>For Buyers</h3>
            <Link href="/#post-buy-request">Post Buy Request</Link>
            <a>Market Research</a>
            <a>Contact Buyers´ Desk</a>
            <Link href="/#post-sell-request">Browse Our Categories</Link>
            <Link href="/help">Buyer´s Guide to Success</Link>
          </div>
          <div className="footerSection">
            <h3>Legal</h3>
            {/* <a>Terms of Use</a> */}
            <a href="/terms">T&Cs</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <Link
              href={{
                pathname: "/contact-us",
                query: { from: "seller-details" },
              }}
            >
              Contact
            </Link>
            <Link href="/help">Sitemap</Link>
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
                  href={`#${country.fallback_name}`}
                  onClick={(e) => {
                    // Prevent the default anchor link behavior
                    e.preventDefault();
                    // Change the location hash manually
                    window.location.hash = country.fallback_name;
                    // Reload the window
                    window.location.reload();
                  }}
                >
                  {country.fallback_name}
                </a>
                <span>|</span>
              </React.Fragment>
            ))}
        </div>

        <div className="terms">
          <span
            className="cp ml-8"
            onClick={() => handleNavigate("/privacy-policy")}
          >
            Privacy Policy
          </span>
          <span className="cp" onClick={() => handleNavigate("/terms")}>
            Terms & Conditions
          </span>
        </div>
      </div>

      <div className="footerBottom">
        <div className="all-rights-reserved ml-small-screen">
          © 1999-2024 Victorum Capital Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
