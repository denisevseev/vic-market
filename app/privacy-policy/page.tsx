"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./style.scss";

export default function PrivacyPolicyPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className="container mt-6rem mb-3-rem ta-center">
      <h3 className="terms-subtitle">
        Infocom Network Private Limited. Privacy Policy
      </h3>

      <TabPanel value={value} index={0}>
        <div className="defined-terms-section ta-start">
          <p className="terms-description">
            This Privacy Policy shall be in compliance with the General Data
            Protection Regulation (GDPR) in effect from May 25, 2018 and any and
            all provisions that may read to the contrary shall be deemed to be
            void and unenforceable as of that date. If you do not agree with the
            terms and conditions of our Privacy Policy, including in relation to
            the manner of collection or use of your information, please do not
            use or access the Site. If you have any questions or concerns
            regarding this Privacy Policy, you should contact our Customer
            Support Desk at helpdesk@victorum.com .
          </p>

          <p className="terms-description">
            ANY CAPITALIZED WORDS USED HENCEFORTH SHALL HAVE THE MEANING
            ACCORDED TO THEM UNDER THIS AGREEMENT. FURTHER, ALL HEADING USED
            HEREIN ARE ONLY FOR THE PURPOSE OF ARRANGING THE VARIOUS PROVISIONS
            OF THE AGREEMENT IN ANY MANNER.NEITHER THE USER NOR THE CREATERS OF
            THIS PRIVACY POLICY MAY USE THE HEADING TO INTERPRET THE PROVISIONS
            CONTAINED WITHIN IT IN ANY MANNER.
          </p>

          <h3 className="terms-subtitle">1. DEFINITIONS</h3>

          <p className="terms-description">
            <b>a.</b> We, Our, and Us shall mean and refer to the creators of
            this privacy policy.
          </p>

          <p className="terms-description">
            <b>b.</b> You, Your, Yourself and User shall mean and refer to
            natural and legal individuals who use the Website.
          </p>

          <p className="terms-description">
            <b>c.</b> Personal Information shall mean and refer to any
            personally identifiable information that We may collect from You.
            For removal of any doubts, please refer to Clause 2.
          </p>

          <p className="terms-description">
            <b>d.</b> Third Parties refer to any website, company or individual
            apart from the User and the creator of this Website.
          </p>

          {/* 2 start */}
          <h3 className="terms-subtitle">2. INFORMATION WE COLLECT</h3>

          <p className="terms-description">
            We are committed to respecting Your online privacy. We further
            recognize Your need for appropriate protection and management of any
            Personal Information You share with us. We may collect the following
            information:
          </p>

          <p className="terms-description">
            <b>a.</b> Personal data such as, but not limited to, Name, Location,
            Password, Email ID, Mobile Number, etc.
          </p>

          <p className="terms-description">
            <b>b.</b> Tracking Information such as, but not limited to the IP
            address of your device and Device ID when connected to the Internet.
            [This information may include the URL that you just came from
            (whether this URL is on the Website or not), which URL you next go
            to (whether this URL is on the Website or not), your computer
            browser information,and other information associated with your
            interaction with the Site.
          </p>

          <p className="terms-description">
            This privacy policy also applies to data we collect from users who
            are not registered as members of this site,including, but not
            limited to, browsing behaviour, pages viewed etc. We also collect
            and store personal information provided by you from time to time on
            the Site. We only collect and use such information from you that we
            consider necessary for achieving a seamless, efficient and safe
            experience, customized to your needs including:
          </p>

          <p className="terms-description">
            <b>a.</b> To enable the provision of services opted for by you.
          </p>

          <p className="terms-description">
            <b>b.</b> To communicate necessary account and service related
            information from time to time.
          </p>

          <p className="terms-description">
            <b>c.</b> To allow you to receive quality customer care services.
          </p>

          <p className="terms-description">
            <b>d.</b> To comply with applicable laws, rules and regulations.
          </p>
          {/* 2 end */}
        </div>
      </TabPanel>
    </Box>
  );
}

function TabPanel(props: {
  children?: React.ReactNode;
  index: any;
  value: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
