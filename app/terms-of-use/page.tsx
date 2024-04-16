"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./terms.scss";
import HeadData from "../components/head";
import { globalDetails } from "../utils/constants";

export default function TermsOfUsePage() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <HeadData
        title="Terms and Conditions | Victorum Marketplace"
        description="Read the terms and conditions of using the Victorum Marketplace. Understand your rights and obligations as a user of our platform."
        keywords="terms, conditions, user agreement, policies, Victorum Marketplace"
      />

      <Box className="container mt-6rem mb-3-rem ta-center">
        <h1 className="terms-title">VICTORUM TRADE TERMS OF USE</h1>
        <h3 className="terms-subtitle">
          It was never easier to use our online services!
        </h3>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        ></Box>
        <TabPanel value={value} index={0}>
          <div className="defined-terms-section ta-start">
            <h2 className="section-title">
              TERMS OF USE OF OUR ONLINE PLATFORMS AND SERVICES
            </h2>

            <p className="terms-description">
              PLEASE READ THE TERMS OF USE SET FORTH BELOW, AS THEY APPLY TO
              YOUR USE OF OUR WEBSITE, SOCIAL MEDIA PLATFORMS, TRADING PLATFORM,
              APP, CRM OR OTHER ONLINE SERVICES (“OUR ONLINE PLATFORMS”).
            </p>

            <p className="terms-description">
              USING OUR WEBSITE, SOCIAL MEDIA PLATFORMS, TRADING PLATFORM, APP,
              CRM OR OTHER ONLINE SERVICES (“OUR ONLINE PLATFORMS”) AFTER
              READING TERMS OF USE AND CONFIRMING THEM BY CLICKING THE
              “OK/ACCEPTED” BUTTON SIGNIFIES YOUR ACCEPTANCE OF THESE TERMS OF
              USE AND AGREE TO BE BOUND BY THEM AND ANY AND ALL OTHER APPLICABLE
              TERMS REFERENCED HEREIN ABSOLUTELY.
            </p>

            <h2 className="section-title">
              1. Possible changes to our online platforms{" "}
            </h2>

            <p className="terms-description">
              We may, in our sole discretion and at any time, without notice to
              you, add to, amend or remove any Information or service from our
              online platforms, or alter the presentation, substance, or
              functionality of these online platforms and services.
            </p>

            <h2 className="section-title">2. Change of Terms </h2>

            <p className="terms-description">
              We may, in our sole discretion and at any time, without notice to
              you, amend this Terms of Use.
            </p>

            <p className="terms-description">
              We may, in our sole discretion and at any time, without notice to
              you, amend this Terms of Use.
            </p>

            <p className="terms-description">
              In addition to these Terms of Use, the use of Services offered
              through our online platforms may be subject to additional terms
              and conditions:
            </p>

            <p className="terms-description">
              - the use of our Victorum Sourcing Services (VSS-System) as well
              as the use of our Victorum Research service are also subject to
              our main Terms & Conditions (Put here please the link to T&Cs)
            </p>

            <p className="terms-description">
              In the event of any conflict, the specific Services terms and
              conditions shall prevail over these Terms of Use.
            </p>

            <h2 className="section-title">3. Users Conduct Obligations</h2>

            <p className="terms-description">
              Using our Online Services and Online Platforms (“OUR ONLINE
              PLATFORMS”) after reading this information and confirming them by
              clicking the “OK/ACCEPTED” button signifies your acceptance not
              to:
            </p>

            <p className="terms-description">
              - trespass, break into, access, use or attempt to trespass, break
              into, access or use any other parts of our servers, and/or any
              data areas for which you have not been authorised by us;
            </p>

            <p className="terms-description">
              - restrict or inhibit any other user from using our Online
              Platforms;
            </p>

            <p className="terms-description">
              - post or transmit any unlawful, fraudulent, defamatory, obscene,
              pornographic, profane, threatening, abusive, hateful, offensive or
              otherwise objectionable or unreasonable Information of any kind,
              including without limitation any transmissions constituting or
              encouraging conduct that may constitute a criminal offence, give
              rise to civil liability, or otherwise violate any local, state,
              national or foreign law;
            </p>

            <p className="terms-description">
              - post or transmit any advertisements, solicitations, chain
              letters, pyramid schemes, investment opportunities or schemes or
              other unsolicited commercial communication, or engage in spamming
              or flooding;
            </p>

            <p className="terms-description">
              - post or transmit any Information or software which contains any
              virus, trojan horse, worm or other harmful component;
            </p>

            <p className="terms-description">
              - post, publish, transmit, reproduce, distribute, exploit or use
              in any way any Information obtained through our Online Platforms
              for or in connection of conducting any direct marketing activities
              and/or disseminating or circulating any part of the content of any
              unsolicited publicity or advertising materials;
            </p>

            <p className="terms-description">
              - sale or exchange of any part of the Information obtained through
              our Online Platforms for any benefits, gain, profit or rewards;
            </p>

            <p className="terms-description">
              - upload, post, publish, transmit, reproduce, or distribute in any
              way, Information obtained through our Online Platforms which is
              protected by copyright, or other proprietary right, or create
              derivative works with respect thereto, without the prior written
              permission of the copyright owner or rightholder.
            </p>

            <h2 className="section-title">4. Access to our Online Platforms</h2>

            <p className="terms-description">
              We reserve the right at all times to prohibit or deny your access
              to one, all or any part of our Online Platforms immediately and
              without notice, where we are of the opinion that you have breached
              any of the terms contained in the Terms of Use, the General Terms
              & Conditions (Put here please the link to T&Cs) or that such
              prohibition or denial is appropriate, desirable or necessary in
              our sole discretion.
            </p>

            <p className="terms-description">
              Whilst we implement appropriate security measures to control
              access to the Website -please see our Privacy Policy Statement for
              further details- (Put here please the link to the privacy
              statement), you must keep the information Victorum sent to you
              confidential and ensure that only you or your authorised employees
              access the Online Platforms and Services offered by Victorum.
            </p>

            <h2 className="section-title">5. Third Party Information</h2>

            <p className="terms-description">
              The Information may contain Information provided by Third Party
              Providers or sourced by Victorum from other references or sources.
              The Information on the Website or on other Online Platforms may
              not be regarded as any recommendation or endorsement of Victorum
              or one of it´s employees for any purpose with respect to any
              person, product or service
            </p>

            <p className="terms-description">
              Victorum is not responsible if any such Information is not
              up-to-date and does not separately verify such information - this
              means that we do not accept any responsibility whatsoever in
              respect of such Information.
            </p>

            <p className="terms-description">
              Please be aware that in particular, the views, comments and
              opinions expressed on Victorum´s Online Platforms do not represent
              the views of or any endorsement by Victorum
            </p>

            <p className="terms-description">
              You are cautioned as to the reliability and accuracy of opinions
              expressed on such Online Platforms.
            </p>

            <p className="terms-description">
              Please bear in mind that any use of and reliance on such
              Information is at your own risk.
            </p>

            <h2 className="section-title">
              6. Links to and from Victorum´s Online Platforms
            </h2>

            <p className="terms-description">
              The links on our Online Platforms may redirect you to other
              websites, social media channels and/or other Online Platforms and
              you acknowledge and agree that Victorum, related companies and/or
              Victorum Affiliates have no responsibility for the accuracy or
              availability of any information provided on these Online
              Platforms.
            </p>

            <p className="terms-description">
              Links to other websites do not constitute an endorsement or check
              by Victorum of such websites neither of the Information, services,
              opinions, products, advertising or other materials available on
              those websites.
            </p>

            <h2 className="section-title">7. Indemnity of Victorum</h2>

            <p className="terms-description">
              You agree to on demand defend, indemnify and hold us and the
              Victorum harmless from and against all claims resulting from
              liabilities, damages, actions, costs and expenses (including
              without limitation legal fees), in connection with or arising from
              your breach of any provision in these Terms of Use and/or your use
              of our Online Platforms. This also applies to the Information
              available from time to time on our Online Platforms for any
              purpose whatsoever.
            </p>

            <h2 className="section-title">8. Intellectual Property Rights</h2>

            <p className="terms-description">
              All intellectual property rights subsisting in respect of the
              Website belong to Victorum or have been lawfully licensed to
              Victorum for use on our Online Platforms.
            </p>

            <p className="terms-description">
              All rights under applicable laws are hereby reserved.
            </p>

            <p className="terms-description">
              Except with the express permission of our IPR-Desk, you are not
              allowed to upload, post, publish, reproduce, transmit or
              distribute in any way any component of any of our Online Platforms
              itself or create derivative works with respect thereto.
            </p>

            <p className="terms-description">
              Please bear in mind that all our Online Platforms are copyrighted
              under applicable laws.
            </p>

            <p className="terms-description">
              Our team at Victorum is very serious about infringement of
              intellectual property rights and has established internal
              guidelines to handle such cases. In cases of questions related to
              infringement of intellectual property rights, please send us a
              message to {globalDetails.email} or call us on {globalDetails.phone}.
            </p>

            <h2 className="section-title">9. Limited Liability and Warranty</h2>

            <p className="terms-description">
              All Information available from time to time on the Website is for
              your general reference only. Victorum does not accept any
              responsibility whatsoever in respect of such Information.
            </p>

            <p className="terms-description">
              In case of any questions related the use of our Online Platforms
              and Services, please send us a message to {" "}
              {globalDetails.email} or call us on {globalDetails.phone}!
            </p>

            {/* end */}

            
          </div>
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
