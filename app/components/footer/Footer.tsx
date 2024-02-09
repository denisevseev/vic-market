"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./footer.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Footer = () => {
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
            boxShadow: 'none', // This will remove the box-shadow
          }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "rgb(255, 255, 255);" }} />
              }
            >
              <h3 style={{ color: "rgb(255, 255, 255);" }}>Customer Support</h3>
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
              boxShadow: 'none', // This will remove the box-shadow
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "rgb(255, 255, 255);" }} />
              }
            >
              <h3 style={{ color: "rgb(255, 255, 255);" }}>About us</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
            </AccordionDetails>
          </Accordion>

          <Accordion
           sx={{
            boxShadow: 'none', // This will remove the box-shadow
          }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "rgb(255, 255, 255);" }} />
              }
            >
              <h3 style={{ color: "rgb(255, 255, 255);" }}>Our services</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
            </AccordionDetails>
          </Accordion>

          <Accordion
           sx={{
            boxShadow: 'none', // This will remove the box-shadow
          }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "rgb(255, 255, 255);" }} />
              }
            >
              <h3 style={{ color: "rgb(255, 255, 255);" }}>For Sellers</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
            </AccordionDetails>
          </Accordion>

          <Accordion
           sx={{
            boxShadow: 'none', // This will remove the box-shadow
          }}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "rgb(255, 255, 255);" }} />
              }
            >
              <h3 style={{ color: "rgb(255, 255, 255);" }}>For Buyers</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
            </AccordionDetails>
          </Accordion>

          <Accordion
           sx={{
            boxShadow: 'none', // This will remove the box-shadow
          }}
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "rgb(255, 255, 255);" }} />
              }
            >
              <h3 style={{ color: "rgb(255, 255, 255);" }}>Directory</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/help">Help Center</Link>
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
            <Link href="/help">Help Center</Link>
            <Link href="/help">Help Center</Link>
            <Link href="/help">Help Center</Link>
            <Link href="/help">Help Center</Link>
            <Link href="/help">Help Center</Link>
            <Link href="/help">Help Center</Link>
            <Link href="/help">Help Center</Link>
            <Link href="/help">Help Center</Link>
            <Link href="/help">Help Center</Link>
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
            <Link href="/help">Advertise with Us</Link>
            <Link href="/help">Book Domains</Link>
            <Link href="/help">Ti Pay</Link>
          </div>
          <div className="footerSection">
            <h3>For Buyers</h3>
            <Link href="/help">Advertise with Us</Link>
            <Link href="/help">Book Domains</Link>
            <Link href="/help">Ti Pay</Link>
          </div>
          <div className="footerSection">
            <h3>Directory</h3>
            <Link href="/help">Advertise with Us</Link>
            <Link href="/help">Book Domains</Link>
            <Link href="/help">Ti Pay</Link>
            <Link href="/help">Advertise with Us</Link>
            <Link href="/help">Book Domains</Link>
            <Link href="/help">Ti Pay</Link>
            <Link href="/help">Ti Pay</Link>
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
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>

      <div className="footerBottom">
        <div style={{ marginTop: "18px", marginBottom: "16px" }}>
          © 1999-2024 Victorum Capital Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
