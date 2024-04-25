"use client";
import React from "react";
import Box from "@mui/material/Box";
import "./MarketResearch.scss";
import { Typography } from "@mui/material";
import HeadData from "../components/head";

export default function MarketResearchPage() {
  return (
    <>
      <HeadData
        title="Market research | Victorum Trade"
        description="Explore comprehensive market research insights on Victorum Trade, a premier B2B e-commerce platform. Discover trends, analyze industry data, and gain valuable market intelligence to make informed business decisions."
        keywords="market research, industry insights, B2B e-commerce platform, Victorum Trade, market trends, industry analysis, business intelligence, buyer-seller connections, market data, global marketplace, business decisions"
      />
      <Box className="marketResearchMainContainer">
        <Box className="titleHeadlineImgBg">
          <Box className="marketResearchTitleHeadlineMW">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* TITLE */}
              <Box className="marketResearchTitleBg">
                <Typography className="marketResearchTitleBgText">
                  Market Research
                </Typography>
              </Box>
              {/* HEADLINE */}
              <Typography className="marketResearchTitle">
                Do you want to expand into South America, China, India, Africa
                or Eastern Europe?
              </Typography>
            </Box>
            <Box
              sx={{
                boxShadow: "0 5px 20px 0 rgba(46,61,73,.1)",
                borderRadius: "12px",
              }}
            >
              <Box className="marketResearchBg"></Box>
            </Box>
          </Box>
        </Box>
        {/* TEXT */}
        <Box className="marketResearchTextContainerPadding">
          <Box className="marketResearchtextContainer">
            <Typography className="marketResearchSubtitle">
              For companies, tapping into international markets is an obvious
              step and many companies and retailers actually earn a not
              inconsiderable proportion of their turnover outside their own home
              country.
            </Typography>
            <Typography className="marketResearchSubtitle">
              But beware, the enormous growth opportunities are often
              accompanied by underestimated risks.
            </Typography>
            <Typography className="marketResearchSubtitle">
              It is precisely these risks that we can eliminate together with
              you with our research services
            </Typography>
            <Typography className="marketResearchSubtitle">
              Many markets are lucrative, but there are always national and
              local regulations and trade agreements to consider. In addition,
              the structure and preferences of consumers differ in different
              countries and regions. However, if these are not carefully
              considered in advance, product sales can quickly come to a
              standstill.
            </Typography>
            <Typography className="marketResearchSubtitle">
              It is therefore important to work with an experienced service
              provider who can support the company in its internationalisation
              as early as the planning phase of an expansion.
            </Typography>
            <Typography className="marketResearchSubtitle">
              We help our customers before they enter the market and analyse the
              possibilities, risks and opportunities for them.
            </Typography>
            <Typography className="marketResearchSubtitle">
              Our research is conducted individually by our local sellers&apos;
              desks in co-operation with national advertising agencies and law
              firms
            </Typography>
            <Typography className="marketResearchSubtitle">
              Contact us here (HIer LInk zu Kontakt) and take advantage of our
              individualised services!
            </Typography>
          </Box>
        </Box>
        {/* <Box className="contactUsContainer">
      <ContactUsForm />
    </Box> */}
      </Box>
    </>
  );
}
