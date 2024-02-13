"use client";
import React from "react";
import Box from "@mui/material/Box";
import "./style.scss";

export default function TermsPage() {
  return (
    <Box className="container mt-3-rem mb-3-rem ta-center">
      <h1 className="terms-title">Privacy Policy</h1>
      <Box>
        <div className="defined-terms-section">
          <h2 className="section-title">1. Defined Terms</h2>
          <p className="terms-description">
            Unless repugnant to the subject or context, the words appearing
            herein below shall have the meanings as set forth below:
          </p>
          <p className="terms-description">
            a. <b>Agreement</b> shall mean this User Agreement and shall include
            the User application form duly completed, its attachment(s) and the
            terms and conditions stated herein and includes the documents
            incorporated by reference including the Illegal/Prohibited Content,
            Disclaimer, Warning against Fraud, Contract Form/Bill terms and
            conditions and such other documents that Company may in its absolute
            discretion add to the Site from time to time. It shall be deemed to
            have been executed at New Delhi.
          </p>

          <p className="terms-description">
            b. <b>Banner</b> means a service offered to a User wherein a graphic
            image is placed on the Site and used to advertise the product(s)
            and/or service(s) of the User and this graphic image is linked to
            the Users own website.
          </p>

          <p className="terms-description">
            c. <b>Call Me Free</b> means a service offered to a User on the Site
            which helps the User to connect with other Users who have subscribed
            to this service. Using this service, a User who may be a prospective
            Buyer can call a listed seller on the Site. In order to receive
            enquiries from prospective buyers, prospective sellers, on the Site,
            may subscribe to this service by paying money to buy calling time
            for their prospective buyers. The Company may offer this Service on
            a trial basis to Users, as well. This service is also commonly
            referred as CLICK TO CALL.
          </p>

          <p className="terms-description">
            d. <b>Company</b> means Infocom Network Private Limited., a Company
            incorporated under the Companies Act, 1956 and having its registered
            office at A-86, Phase II, Okhla Industrial Area, New Delhi, Delhi,
            Victorum, 110020 along with its unit for the Companys website called
            Victorum.com and where the context so requires, means and includes
            all Infocom Network Private Limited.s officers, directors, employees
            and subsidiary, associate and affiliate entities, and/or business
            entities with whom Infocom Network Private Limited. enters into a
            partnership or strategic or financial alliance.
          </p>

          <p className="terms-description">
            e. <b>Credit Report</b> is a third party paid service provided to a
            User to obtain information about another company or legal entity,
            including detailed analytical information about profitability, past
            and present trading analysis and ownership essentially with a view
            to analyze their credit rating and stability.
          </p>

          <p className="terms-description">
            f. <b>Customized Header Catalog</b> is a subtype of On-line Catalogs
            that allow the customer to have catalog designed to his taste,
            however the functionalities available on the Catalog are fixed and
            are a part of the standardized offering.
          </p>

          <p className="terms-description">
            g. <b>Customised Websites</b> is a platform for Users to showcase
            their products or services on the Site.
          </p>
        </div>
        <div className="defined-terms-section">
          <h2 className="section-title mt-3-rem">
            2. Prohibited Content & Consents
          </h2>
          <p className="terms-description">
            Unless repugnant to the subject or context, the words appearing
            herein below shall have the meanings as set forth below:
          </p>
          <p className="terms-description">
            a. <b>Agreement</b> shall mean this User Agreement and shall include
            the User application form duly completed, its attachment(s) and the
            terms and conditions stated herein and includes the documents
            incorporated by reference including the Illegal/Prohibited Content,
            Disclaimer, Warning against Fraud, Contract Form/Bill terms and
            conditions and such other documents that Company may in its absolute
            discretion add to the Site from time to time. It shall be deemed to
            have been executed at New Delhi.
          </p>

          <p className="terms-description">
            b. <b>Banner</b> means a service offered to a User wherein a graphic
            image is placed on the Site and used to advertise the product(s)
            and/or service(s) of the User and this graphic image is linked to
            the Users own website.
          </p>

          <p className="terms-description">
            c. <b>Call Me Free</b> means a service offered to a User on the Site
            which helps the User to connect with other Users who have subscribed
            to this service. Using this service, a User who may be a prospective
            Buyer can call a listed seller on the Site. In order to receive
            enquiries from prospective buyers, prospective sellers, on the Site,
            may subscribe to this service by paying money to buy calling time
            for their prospective buyers. The Company may offer this Service on
            a trial basis to Users, as well. This service is also commonly
            referred as CLICK TO CALL.
          </p>

          <p className="terms-description">
            d. <b>Company</b> means Infocom Network Private Limited., a Company
            incorporated under the Companies Act, 1956 and having its registered
            office at A-86, Phase II, Okhla Industrial Area, New Delhi, Delhi,
            Victorum, 110020 along with its unit for the Companys website called
            Victorum.com and where the context so requires, means and includes
            all Infocom Network Private Limited.s officers, directors, employees
            and subsidiary, associate and affiliate entities, and/or business
            entities with whom Infocom Network Private Limited. enters into a
            partnership or strategic or financial alliance.
          </p>

          <p className="terms-description">
            e. <b>Credit Report</b> is a third party paid service provided to a
            User to obtain information about another company or legal entity,
            including detailed analytical information about profitability, past
            and present trading analysis and ownership essentially with a view
            to analyze their credit rating and stability.
          </p>

          <p className="terms-description">
            f. <b>Customized Header Catalog</b> is a subtype of On-line Catalogs
            that allow the customer to have catalog designed to his taste,
            however the functionalities available on the Catalog are fixed and
            are a part of the standardized offering.
          </p>

          <p className="terms-description">
            g. <b>Customised Websites</b> is a platform for Users to showcase
            their products or services on the Site.
          </p>
          <p className="terms-description">
            <b>
              This document is an electronic record in terms of the Information
              Technology Act, 2000 and the provisions pertaining to electronic
              records in various statues amended by the Information Technology
              Act, 2000.
            </b>
          </p>
        </div>
      </Box>
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
