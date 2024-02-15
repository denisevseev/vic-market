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

const Footer = () => {
  const router = useRouter();
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
          </Accordion>

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
              <Link href="/about-us">About Our Company</Link>
              <Link href="/help">Success Stories</Link>
              <Link href="/help">Victorum Blog</Link>
              <Link href="/help">Victorum in News</Link>
              <Link href="/help">Jobs & Carrers</Link>
              <Link href="/help">Contact Us</Link>
              <Link href="/help">Partnetr with Us</Link>
              <Link href="/help">Make a Payment</Link>
              <Link href="/help">Weekly Newsletter</Link>
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
              <h4 className="title-color">Our services</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/help">Advertise with Us</Link>
              <Link href="/help">Book domains</Link>
              <Link href="/help">TI Pay</Link>
              <Link href="/help">Trade khata</Link>
              <Link href="/help">Trade Udhaar</Link>
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
              <Link href="/help">Display New Products</Link>
              <Link href="/help">Buy Trade Leads</Link>
              <Link href="/help">Subscribe Buy Trade Alerts</Link>
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
              <Link href="/help">Post your Requirement</Link>
              <Link href="/help">Browse Suppliers</Link>
              <Link href="/help">Subscribe sell Trade Alerts</Link>
              <Link href="/help">Help Center</Link>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              boxShadow: "none",
            }}
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
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
              <h4 className="title-color">Directory</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/help">Manufacturers</Link>
              <Link href="/help">Business Services</Link>
              <Link href="/help">Service Providers</Link>
              <Link href="/help">Industry Hubs</Link>
              <Link href="/help">Country Suppliers</Link>
              <Link href="/help">Featured Products</Link>
              <Link href="/help">Sitemap</Link>
            </AccordionDetails>
          </Accordion>
        </div>
      ) : (
        <>
          <div className="footerSection">
            <h3>Customer Support</h3>
            <Link href="/help">Help Center</Link>
            <Link href="/help">User Guide</Link>
            <Link href="/help">Return & Cancellation</Link>
            <Link href="/help">Policy</Link>
            <Link href="/help">Shipping & Delivery Policy</Link>
          </div>
          <div className="footerSection">
            <h3>About us</h3>
            <Link href="/about-us">About Our Company</Link>
            <Link href="/help">Success Stories</Link>
            <Link href="/help">Victorum Blog</Link>
            <Link href="/help">Victorum in News</Link>
            <Link href="/help">Jobs & Carrers</Link>
            <Link href="/help">Contact Us</Link>
            <Link href="/help">Partnetr with Us</Link>
            <Link href="/help">Make a Payment</Link>
            <Link href="/help">Weekly Newsletter</Link>
          </div>
          <div className="footerSection">
            <h3>Our Services</h3>
            <Link href="/help">Advertise with Us</Link>
            <Link href="/help">Book Domains</Link>
            <Link href="/help">Ti Pay</Link>
            <Link href="/help">Trade Khata</Link>
            <Link href="/help">Trade Udhaar</Link>
          </div>
          <div className="footerSection">
            <h3>For Sellers</h3>
            <Link href="/help">Display New Products</Link>
            <Link href="/help">Buy Trade Leads</Link>
            <Link href="/help">Subscribe Buy Trade Alerts</Link>
          </div>
          <div className="footerSection">
            <h3>For Buyers</h3>
            <Link href="/help">Post your Requirement</Link>
            <Link href="/help">Browse Suppliers</Link>
            <Link href="/help">Subscribe sell Trade Alerts</Link>
            <Link href="/help">Help Center</Link>
          </div>
          <div className="footerSection">
            <h3>Directory</h3>
            <Link href="/help">Manufacturers</Link>
            <Link href="/help">Business Services</Link>
            <Link href="/help">Service Providers</Link>
            <Link href="/help">Industry Hubs</Link>
            <Link href="/help">Country Suppliers</Link>
            <Link href="/help">Featured Products</Link>
            <Link href="/help">Sitemap</Link>
          </div>
        </>
      )}

      <div className="footerCountries">
        <div className="countries">
          <Link href="/privacy">Japan</Link>
          <span>|</span>
          <Link href="/terms">China</Link>
          <span>|</span>
          <Link href="/privacy">Taiwan</Link>
          <span>|</span>
          <Link href="/terms">Thailand</Link>
          <span>|</span>
          <Link href="/privacy">Malaysia</Link>
          <span>|</span>

          <Link href="/privacy">UAE</Link>
          <span>|</span>
          <Link href="/terms">Saudi Arabia</Link>
          <span>|</span>
          <Link href="/privacy">USA</Link>
          <span>|</span>
          <Link href="/terms">Iran</Link>
        </div>
        <div className="terms">
          <span className="cp ml-8" onClick={() => handleNavigate("/privacy-policy")}>Privacy Policy</span>
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
