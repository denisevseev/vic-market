"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./terms.scss";
import HeadData from "../components/head";

export default function TermsPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <HeadData
        title="Terms and Conditions | Victorum Marketplace"
        description="Read the terms and conditions of using the Victorum Marketplace. Understand your rights and obligations as a user of our platform."
        keywords="terms, conditions, user agreement, policies, Victorum Marketplace"
      />

      <Box className="container mt-6rem mb-3-rem ta-center">
        <h1 className="terms-title">Terms and Conditions</h1>
        <h3 className="terms-subtitle">
          (For any Grievance you may write to Grievance Officer: Mr. Victorum
          VC., email: vcd@victorum.com, helpdesk@victorum.com)
        </h3>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              sx: {
                display: { xs: "none", sm: "none", md: "block" },
              },
            }}
            sx={{
              "& .MuiTabs-flexContainer": {
                flexWrap: "wrap",
              },
              ".MuiTab-root": {
                color: "#666 !important",
                fontSize: "18px",
                fontWeight: "bold",
                marginRight: { md: "2rem" },
                "&.Mui-selected": {
                  color: "#2A5182 !important",
                },
              },
            }}
          >
            <Tab
              label="User Agreement"
              sx={{
                color: "#666 !important",
                fontSize: "18px",
                fontWeight: "bold",
                marginRight: "2rem",
              }}
            />
            <Tab
              label="Disclaimer"
              sx={{
                color: "#666 !important",
                fontSize: "18px",
                fontWeight: "bold",
                marginRight: "2rem",
              }}
            />
            <Tab
              label="Warning Against Fraud"
              sx={{
                color: "#666 !important",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="defined-terms-section ta-start">
            <h2 className="section-title">1. Defined Terms</h2>
            <p className="terms-description">
              Unless repugnant to the subject or context, the words appearing
              herein below shall have the meanings as set forth below:
            </p>
            <p className="terms-description">
              a. <b>Agreement</b> shall mean this User Agreement and shall
              include the User application form duly completed, its
              attachment(s) and the terms and conditions stated herein and
              includes the documents incorporated by reference including the
              Illegal/Prohibited Content, Disclaimer, Warning against Fraud,
              Contract Form/Bill terms and conditions and such other documents
              that Company may in its absolute discretion add to the Site from
              time to time. It shall be deemed to have been executed at New
              Delhi.
            </p>

            <p className="terms-description">
              b. <b>Banner</b> means a service offered to a User wherein a
              graphic image is placed on the Site and used to advertise the
              product(s) and/or service(s) of the User and this graphic image is
              linked to the Users own website.
            </p>

            <p className="terms-description">
              c. <b>Call Me Free</b> means a service offered to a User on the
              Site which helps the User to connect with other Users who have
              subscribed to this service. Using this service, a User who may be
              a prospective Buyer can call a listed seller on the Site. In order
              to receive enquiries from prospective buyers, prospective sellers,
              on the Site, may subscribe to this service by paying money to buy
              calling time for their prospective buyers. The Company may offer
              this Service on a trial basis to Users, as well. This service is
              also commonly referred as CLICK TO CALL.
            </p>

            <p className="terms-description">
              d. <b>Company</b> means Infocom Network Private Limited., a
              Company incorporated under the Companies Act, 1956 and having its
              registered office at A-86, Phase II, Okhla Industrial Area, New
              Delhi, Delhi, Victorum, 110020 along with its unit for the
              Companys website called Victorum.com and where the context so
              requires, means and includes all Infocom Network Private Limited.s
              officers, directors, employees and subsidiary, associate and
              affiliate entities, and/or business entities with whom Infocom
              Network Private Limited. enters into a partnership or strategic or
              financial alliance.
            </p>

            <p className="terms-description">
              e. <b>Credit Report</b> is a third party paid service provided to
              a User to obtain information about another company or legal
              entity, including detailed analytical information about
              profitability, past and present trading analysis and ownership
              essentially with a view to analyze their credit rating and
              stability.
            </p>

            <p className="terms-description">
              f. <b>Customized Header Catalog</b> is a subtype of On-line
              Catalogs that allow the customer to have catalog designed to his
              taste, however the functionalities available on the Catalog are
              fixed and are a part of the standardized offering.
            </p>

            <p className="terms-description">
              g. <b>Customised Websites</b> is a platform for Users to showcase
              their products or services on the Site.
            </p>
          </div>
          <div className="defined-terms-section">
            <h2 className="section-title mt-3-rem ta-start">
              2. Prohibited Content & Consents
            </h2>
            <p className="terms-description">
              Unless repugnant to the subject or context, the words appearing
              herein below shall have the meanings as set forth below:
            </p>
            <p className="terms-description">
              a. <b>Agreement</b> shall mean this User Agreement and shall
              include the User application form duly completed, its
              attachment(s) and the terms and conditions stated herein and
              includes the documents incorporated by reference including the
              Illegal/Prohibited Content, Disclaimer, Warning against Fraud,
              Contract Form/Bill terms and conditions and such other documents
              that Company may in its absolute discretion add to the Site from
              time to time. It shall be deemed to have been executed at New
              Delhi.
            </p>

            <p className="terms-description">
              b. <b>Banner</b> means a service offered to a User wherein a
              graphic image is placed on the Site and used to advertise the
              product(s) and/or service(s) of the User and this graphic image is
              linked to the Users own website.
            </p>

            <p className="terms-description">
              c. <b>Call Me Free</b> means a service offered to a User on the
              Site which helps the User to connect with other Users who have
              subscribed to this service. Using this service, a User who may be
              a prospective Buyer can call a listed seller on the Site. In order
              to receive enquiries from prospective buyers, prospective sellers,
              on the Site, may subscribe to this service by paying money to buy
              calling time for their prospective buyers. The Company may offer
              this Service on a trial basis to Users, as well. This service is
              also commonly referred as CLICK TO CALL.
            </p>

            <p className="terms-description">
              d. <b>Company</b> means Infocom Network Private Limited., a
              Company incorporated under the Companies Act, 1956 and having its
              registered office at A-86, Phase II, Okhla Industrial Area, New
              Delhi, Delhi, Victorum, 110020 along with its unit for the
              Companys website called Victorum.com and where the context so
              requires, means and includes all Infocom Network Private Limited.s
              officers, directors, employees and subsidiary, associate and
              affiliate entities, and/or business entities with whom Infocom
              Network Private Limited. enters into a partnership or strategic or
              financial alliance.
            </p>

            <p className="terms-description">
              e. <b>Credit Report</b> is a third party paid service provided to
              a User to obtain information about another company or legal
              entity, including detailed analytical information about
              profitability, past and present trading analysis and ownership
              essentially with a view to analyze their credit rating and
              stability.
            </p>

            <p className="terms-description">
              f. <b>Customized Header Catalog</b> is a subtype of On-line
              Catalogs that allow the customer to have catalog designed to his
              taste, however the functionalities available on the Catalog are
              fixed and are a part of the standardized offering.
            </p>

            <p className="terms-description">
              g. <b>Customised Websites</b> is a platform for Users to showcase
              their products or services on the Site.
            </p>
            <p className="terms-description">
              <b>
                This document is an electronic record in terms of the
                Information Technology Act, 2000 and the provisions pertaining
                to electronic records in various statues amended by the
                Information Technology Act, 2000.
              </b>
            </p>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p className="terms-description">
            Company as well as its management have created these pages and the
            Services as a specific feature and as a service to the global exim
            community.
          </p>

          <p className="terms-description">
            No warranty or condition expressed or implied or statutory is being
            provided to the User. Company hereby specifically disclaims any
            quality, durability, accuracy, reliability and all express or
            implied warranties including but not limited to warranties of title,
            merchantability, fitness for a particular purpose or performance.
            Company does not make any representation or warranties of any kind
            about any product or Services offered, or displayed or hosted on the
            Site. All such warranties, representations, conditions and
            undertakings are hereby excluded.
          </p>

          <p className="terms-description">
            Under no circumstances shall Company be held liable for any delay or
            failure or disruption of the content or services delivered through
            the Site resulting directly or indirectly from acts of nature,
            forces or causes beyond our reasonable control, including without
            limitation, internet failures, computer, telecommunications or any
            other equipment failures, electrical power failues, strike, labor
            disputes, riots, insurrections, civil disturbances, shortage of
            labor or materials, fires, flood, storms, explosions, acts of God,
            war, governmental actions, order of domestic or foreign courts or
            tribunals or non-performance of third parties or other force majeure
            condition.
          </p>

          <p className="terms-description">
            Listing of counterfeits, non-licensed replicas or unauthorized
            products is strictly prohibited on the site. Further no products can
            be advertised on the site without the explicit permission from the
            intellectual property right holder. It is clear inter-alia that all
            third party intellectual property rights are owned by the third
            party and not Infocom/its users.
          </p>

          <p className="terms-description">
            Under no circumstances will Company be liable, direct, indirect,
            incidental, special, consequential or exemplary damages including
            but not limited to, damages for loss of profit, goodwill, use, data
            or other intangible losses arising out of or in connection with the
            use of the Services provided by Company (“Damages”) whether arising
            out of or in connection with or otherwise in relation to any
            business or other transaction conducted in relation to the
            Service(s). The Company’s liability is limited in any and all
            circumstances shall be limited to the lesser of the amount of fees
            and/or charges paid by the User or Rs. 10,000/- (Indian Rupees Ten
            Thousand)
          </p>

          <p className="terms-description">
            The User hereby indemnifies and holds Company harmless against any
            and all losses, claims, injuries and Damages that may arise out of
            the User’s breach of this Disclaimer and/or the Agreement,
            Illegal/Prohibited Content, Warning against Fraud and or any breach
            of the terms and conditions or the representations or warranties
            made by the User herein or in the Agreement/usage terms.
          </p>

          <p className="terms-description">
            Company reserves the right to change the nature of the paid Services
            offered here or discontinue its Services to a member without any
            prior notice.
          </p>

          <p className="terms-description">
            This document is an electronic record in terms of the Information
            Technology Act, 2000 and the provisions pertaining to electronic
            records in various statues amended by the Information Technology
            Act, 2000.
          </p>

          <p className="terms-description">
            This document is an electronic record in terms of the Information
            Technology Act, 2000 and the provisions pertaining to electronic
            records in various statues amended by the Information Technology
            Act, 2000.
          </p>
          <p className="terms-description">
            <b>
              This document is an electronic record in terms of the Information
              Technology Act, 2000 and the provisions pertaining to electronic
              records in various statues amended by the Information Technology
              Act, 2000.
            </b>
          </p>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h3 className="terms-title-red ta-center">FRAUD WARNING</h3>

          <div className="fraud-box">
            <p className="terms-description">
              a. All Users are advised to be very careful while doing business
              with individuals, body corporates or companies from any part of
              the world.
            </p>
            <p className="terms-description">
              b. Users are advised to exercise due caution while transacting
              with a prospective buyer or a seller on the Site. Users must
              undertake interactions or transactions with organizations and/or
              individuals located on or through the Site, with reasonable
              caution and after undertaking thorough diligence on such
              organization and/or individual. Neither the Company nor its
              director’s, employees, officers or agents shall be liable to any
              User or otherwise for any illegal or fraudulent interaction or
              transaction with organizations and/or individuals located on or
              through the Site.
            </p>

            <p className="terms-description">
              c. Users are advised to not send any advance money/legal fee or
              products unless there is cash in your account or an irrevocable
              letter of credit from the buyer, duly authorised by the buyer’s
              bank.
            </p>

            <p className="terms-description">
              d. Users are advised not to transact business unless full payment
              is made to you before shipping of the products.
            </p>
          </div>

          <p className="terms-description">
            a. <b>CREDIT CARD SCAMS</b> When a User receives any online Order
            paid by Credit Card, it is recommended that you ask for a written
            Credit Card Authorisation to be faxed to you. Please get validity of
            the Credit Card checked with your Bank or contact VISA, Master Card
            or American Express directly. Unless the validity of the Credit Card
            is confirmed, please do not ship any goods.
          </p>

          <p className="terms-description">
            b. <b>BANK DRAFT SCAMS - BANK DRAFT SCAMS - </b> There have been
            cases of people receiving Bank Drafts with unauthorised printing of
            Bank Names. Before shipping any product or advancing a partial cash
            advance, you must wait for the Bank to clear the Bank Draft/Check.
          </p>

          <p className="terms-description">
            c. <b>Registration/License/Tender Fee SCAMS - </b> Cases have been
            reported where an offer is sent to buy a large number of goods after
            the seller pays them a Registration/License/Tender Fee. They post
            Offers to BUY large quantity of Computers and other material.Once
            you submit your bid; you will be notified that your Tender has been
            accepted. You will then be asked to pay for Legal fees and Tender
            Fee. DO NOT PAY ANY FEE. Dont ship any Computers/Other products
            unless you have the cash in your account confirmed by your bank.
          </p>

          <p className="terms-description">
            <b>
              This document is an electronic record in terms of the Information
              Technology Act, 2000 and the provisions pertaining to electronic
              records in various statues amended by the Information Technology
              Act, 2000.
            </b>
          </p>
        </TabPanel>
      </Box>
    </>
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
