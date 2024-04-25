"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./terms.scss";
import HeadData from "../components/head";

export default function TermsPage() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <HeadData
        title="Terms and Conditions | Victorum Trade"
        description="Read the terms and conditions of using the Victorum Trade. Understand your rights and obligations as a user of our platform."
        keywords="terms, conditions, user agreement, policies, Victorum Trade"
      />

      <Box className="container mt-6rem mb-3-rem ta-center">
        <h1 className="terms-title">VICTORUM TRADE TERMS AND CONDITIONS</h1>
        <h3 className="terms-subtitle">We really keep things super simple!</h3>
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
            <p className="terms-description">
              YOUR ACCESS TO AND USE OF OUR WEBSITE IS AT YOUR SOLE RISK AND IS
              PROVIDED AS IS, AS AVAILABLE. THE WEBSITE IS FOR YOUR PERSONAL USE
              ONLY AND WE MAKE NO REPRESENTATION OR WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES
              ON MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE.
            </p>

            <p className="terms-description">
              OUR ENTIRE LIABILITY AND YOUR EXCLUSIVE REMEDY WITH RESPECT TO THE
              WEBSITE OR OTHERWISE, IS RE-PERFORMANCE OF DEFECTIVE SERVICES. IN
              JURISDICTIONS WHICH DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
              CERTAIN TYPES OF LIABILITY, OUR LIABILITY WILL BE LIMITED TO THE
              MAXIMUM EXTENT PERMITTED BY LAW. WE DO NOT ENDORSE, WARRANT OR
              GUARANTEE ANY INFORMATION, MATERIAL, PRODUCT OR SERVICE OFFERED
              THROUGH US OR OUR WEBSITE. WE ARE NOT AND WILL NOT BE A PARTY TO
              ANY TRANSACTION BETWEEN YOU AND ANY THIRD PARTY
            </p>

            <p className="terms-description">
              Neither HKTDC nor any of the HKTDC Affiliates shall guarantee or
              assume any responsibility that:
            </p>

            <p className="terms-description">
              - the Information on the Website is accurate, adequate, current or
              reliable, or may be used for any purpose other than for general
              reference; the Information on the Website is free of defect,
              error, omission, virus or anything which may change, erase, add to
              or damage your software, data or equipment; messages sent through
              the internet including in connection with the Services will be
              free from interception, corruption, error, delay or loss; access
              to the Website will be available or be uninterrupted; use of the
              Website or Services will achieve any particular result; or defects
              in the Website will be corrected. Without limiting the generality
              of the foregoing, in no event will the HKTDC or the HKTDC
              Affiliates be liable to you or any other person for any direct,
              indirect, incidental, special, punitive or consequential loss or
              damages, including any loss of business or profit, arising out of
              any use, or inability to use, the Information or the Services,
              even if HKTDC or the HKTDC Affiliates have been advised of the
              possibility of such loss or damages.
            </p>

            <p className="terms-description">
              In addition, HKTDC accepts no responsibility for or liability in
              respect of Information or services provided by Third Party
              Providers, nor does it endorse such Third Party Providers. You
              acknowledge and accept that any dispute in relation to such
              Information or services is unrelated to HKTDC and is solely a
              matter between you and such Third Party Provider.
            </p>

            <p className="terms-description">
              You will exercise and rely solely on your own skill and judgment
              in your use and interpretation of the Information and use of the
              Services. You are responsible to ensure that your use of the
              Information obtained through the Website and the Services in any
              way for any purpose whatsoever complies with all applicable legal
              requirements, including without limitation, the data protection
              law applicable to you.
            </p>

            <p className="terms-description">
              Without prejudice to the foregoing, if your use of the Services
              does not proceed satisfactorily and/or where applicable you do not
              receive appropriate responses to such use from HKTDC as set out in
              these Terms of Use or the applicable terms according to clause 1.2
              above or otherwise, you are advised to contact us via contact form
              or by telephone at (852)1830668. No such lack of response shall be
              deemed to constitute any acquiescence or waiver.
            </p>

            <p className="terms-description">
              The limitation of liability contained in these Terms of Use will
              apply to the fullest extent permitted by applicable laws.
            </p>

            <h2 className="section-title">
              1. Application and Acceptance of the User Agreement
            </h2>
            <p className="terms-description">
              1.1. Your use of Sourcing is subject to the terms and conditions
              contained in this User Agreement as well as the Privacy Policy
              Statement , the Listing Policy , the IPR Complaint Procedure and
              Guidelines , application forms completed in connection with
              Sourcing, and any other rules and policies that HKTDC may publish
              on any website forming part of Sourcing. By accessing or using
              Sourcing, you agree to accept and be bound by this User Agreement.
              Any User who does not accept or agree to comply with all of the
              User Agreement is not licensed by HKTDC and is forbidden from
              accessing or using Sourcing.
            </p>

            <p className="terms-description">
              1.2. By accessing or using Sourcing, you undertake and warrant
              that this User Agreement constitutes your legal, binding and
              enforceable obligations, and all actions needed to authorise your
              entry into and performance of this User Agreement have been taken.
            </p>

            <p className="terms-description">
              1.3. You acknowledge and agree that HKTDC may amend any of the
              terms of this User Agreement at any time by posting the relevant
              amended and restated User Agreement on a website forming part of
              Sourcing. By continuing to use or access Sourcing, you agree that
              the amended User Agreement will apply to you.
            </p>

            <p className="terms-description">
              1.4. If HKTDC has posted or provided a translation of the English
              language version of the User Agreement, you agree that the
              translation is provided for convenience only and that the English
              language version will govern your use of and access to Sourcing.
            </p>

            <p className="terms-description">
              1.5. The User Agreement may not otherwise be modified except in
              writing by an authorized officer of HKTDC.
            </p>

            <p className="terms-description">
              1.5. The User Agreement may not otherwise be modified except in
              writing by an authorized officer of HKTDC.
            </p>

            <h2 className="section-title">2. Use of Sourcing</h2>

            <p className="terms-description">
              2.1. You may only use Sourcing for your own employment, trade,
              professional or business purposes as a purchasing resource. Except
              as aforesaid you may not copy, reproduce, publish, distribute,
              sell, divert, create derivative works from or, in any way directly
              or indirectly in competition with HKTDC, commercially exploit the
              Content available on Sourcing in whole or in part. You must not
              delete or change any copyright or other proprietary notice on any
              Content available from or obtained through Sourcing. Any other
              use, including the reproduction, modification, distribution,
              transmission, republication, display, or performance, of the
              Content in whole or in part, without prior written permission from
              HKTDC, is strictly prohibited.
            </p>

            <p className="terms-description">
              2.2. Only a User authorised by HKTDC and/or such Users authorised
              employees may use Sourcing. You may not transfer all or any of
              your rights or obligations under this User Agreement to any other
              person and this User Agreement is personal to the authorised User.
            </p>

            <p className="terms-description">
              2.3. Users must exercise and rely solely on their own skill and
              judgment in your use and interpretation of the Content. You are
              responsible to ensure that your use of the Content complies with
              all applicable legal requirements
            </p>

            <p className="terms-description">
              2.4. HKTDC is not responsible for the conduct of any User of
              Sourcing, and shall not be liable to any person in connection with
              any damage suffered by any person as a result of such Users
              conduct.
            </p>

            <p className="terms-description">
              2.5. HKTDC reserves the right to levy fees or charges on any of
              the services, information or Content comprised in Sourcing or
              provided by HKTDC. If HKTDC decides to levy such a charge, we will
              publish the amount or rate therefor, identifying the services
              concerned, by a general message on all of the Sourcing websites.
              By requesting, commencing or continuing the use of the relevant
              service, information or Content at any time after such
              publication, you agree to pay HKTDC such charges.
            </p>

            <p className="terms-description">
              2.6. By accepting this User Agreement through your use or access
              to Sourcing, you represent that you are (a) a person of legal age
              and able to form a legally binding contract in the jurisdiction in
              which you are a resident and from which you use Sourcing, (b)
              permitted to receive Sourcing under the laws of the jurisdiction
              in which you are a resident and from which you use it and (c) a
              reasonably sophisticated user of online transaction services. If
              you do not agree to (or cannot comply with) this clause, you do
              not have HKTDCs permission to use Sourcing.
            </p>

            <p className="terms-description">
              2.7. Users shall be solely responsible for all information and
              content they post on or transmit via Sourcing.
            </p>

            <p className="terms-description">
              2.8. While accessing or using Sourcing, you represent, warrant and
              agree that you will not:
            </p>

            <p className="terms-description">
              2.8.1. Post or transmit false, inaccurate, misleading, defamatory,
              libelous, discriminatory, threatening or harassing, objectionable,
              offensive or unlawful content;
            </p>

            <p className="terms-description">
              2.8.2. Violate or promote, aid or abet any activity which may
              violate any applicable laws (including without limitation those
              governing export control, consumer protection, unfair competition,
              or false advertising), regulations, HKTDC policies (including
              without limitation the Listing Policy), or third party rights such
              as intellectual property rights;
            </p>

            <p className="terms-description">
              2.8.3. Undertake any action which may undermine the integrity of
              HKTDC’s feedback system, such as leaving positive feedback for
              yourself using secondary Member IDs or through third parties or by
              leaving unsubstantiated negative feedback for another User;
            </p>

            <p className="terms-description">
              2.8.4. Transfer your HKTDC Account (including your User ID and
              Password) to another party without prior written consent from
              HKTDC;
            </p>

            <p className="terms-description">
              2.8.5. Distribute spam, bulk electronic communications, chain
              letters, or pyramid schemes;
            </p>

            <p className="terms-description">
              2.8.6. Distribute viruses or any other technologies that may harm
              HKTDC or its websites, or the interests or property of other
              users;
            </p>

            <p className="terms-description">
              2.8.7. Undertake any actions to undermine the integrity of the
              computer systems or networks of HKTDC and/or any other User nor to
              gain unauthorized access to such computer systems or networks;
            </p>

            <p className="terms-description">
              2.8.8. Aggregate information of other Users, including, but not
              limited to, their email addresses and User IDs, without their
              advance consent, nor make any attempt to copy, reproduce, exploit
              or expropriate HKTDC’s various proprietary directories, databases
              and listings;
            </p>

            <p className="terms-description">
              2.8.9. Link directly or indirectly to any other websites which
              include content that may violate this User Agreement;
            </p>

            <p className="terms-description">
              2.8.10. Use Sourcing to defraud any person (including without
              limitation sales of stolen items, or use of stolen credit/debit
              cards); or
            </p>

            <p className="terms-description">
              2.8.11. Impersonate any person or entity, misrepresent yourself or
              your affiliation with any person or entity.
            </p>

            <p className="terms-description">
              2.9. While accessing or using Sourcing, you represent, warrant and
              agree that you will conduct your business transactions with other
              Users in good faith.
            </p>

            <p className="terms-description">
              2.10. By posting or displaying any content or other information on
              Sourcing or providing the same to HKTDC or our representative(s),
              you grant an irrevocable, perpetual, worldwide, royalty-free, and
              freely sub-licensable (through multiple tiers) license to HKTDC to
              display, transmit, distribute, reproduce, publish, duplicate,
              adapt, modify, translate, create derivative works, and otherwise
              use any or all of such content or information in any form, media,
              or technology now known or not currently known in any manner and
              for any purpose. You confirm and warrant to HKTDC that you have
              all the rights, power and authority necessary to grant the above
              license.
            </p>

            <h2 className="section-title">3. Your Information</h2>

            <p className="terms-description">
              3.1. You agree to provide such information as may be reasonably
              requested by HKTDC in connection with your use of Sourcing.
            </p>

            <p className="terms-description">
              3.2. You hereby warrant and represent that all information,
              including registration information, supplied by you to HKTDC or
              HKTDC Affiliates through Sourcing is complete, true, up-to-date
              and accurate and that you will maintain it as such. HKTDC and
              HKTDC Affiliates are entitled to rely on such information.
            </p>

            <p className="terms-description">
              3.3. Although secure socket layer has been installed on Sourcing,
              all your information is sent at your sole risk to HKTDC and open
              for all users or public access without limitation and for
              avoidance of doubt, unauthorised third parties may be able to
              access such information during its transmission.
            </p>

            <p className="terms-description">
              3.4. You agree to the use and disclosure of your information in
              the manner set out in HKTDCs Privacy Policy Statement (as updated
              from time to time).
            </p>

            <h2 className="section-title">4. Registration</h2>

            <p className="terms-description">
              4.1. Except with HKTDC’s approval, one User may only register one
              account on Sourcing. HKTDC may cancel or terminate a User’s
              account if HKTDC has reasons to suspect that the User has
              concurrently registered or is in control of two or more member
              accounts. HKTDC may reject User’s application for registration or
              terminate a User’s account for any reason.
            </p>

            <p className="terms-description">
              4.2. Upon registration, HKTDC shall assign an account and issue
              the User a member ID and password (the latter shall be chosen by a
              registered User during registration).
            </p>

            <p className="terms-description">
              4.3. Each set of member ID and password is unique to a single
              account. Each user shall be solely responsible for maintaining the
              confidentiality and security of its member ID and password. No
              User may share, assign, or permit the use of its account, ID or
              password by another person outside of the Users own business
              entity. User agrees to notify HKTDC immediate
            </p>

            <p className="terms-description">
              4.4. User agrees that all activities occurring under their account
              (including without limitation, posting any company or product
              information, entering any sale or purchase contracts, subscribing
              to or making any payment for any services) will be deemed to have
              been authorized by the User and the User accepts responsibility
              for them.
            </p>

            <p className="terms-description">
              4.5. Upon registration, you consent to the inclusion of any
              submitted information about you in our database and authorize
              HKTDC and our affiliates to share such information with other
              Users or otherwise use your personal information in accordance
              with our Privacy Policy Statement .
            </p>

            <h2 className="section-title">5. Provision of Sourcing</h2>

            <p className="terms-description">
              5.1. You must register as a member of Sourcing in order to access
              and use certain services comprised therein. Further, HKTDC
              reserves the right, without prior notice, to restrict access to or
              use of Sourcing (or any features or services within it) to any
              paying User, or prevent or restrict any User from accessing or
              using Sourcing, or permit access or use only subject to certain
              conditions, in its sole and absolute discretion, without need to
              give any reason.
            </p>

            <p className="terms-description">
              5.2. HKTDC may launch, change, upgrade, impose conditions on,
              suspend, or stop Sourcing (or any features or services within it)
              without prior notice
            </p>

            <p className="terms-description">
              5.3. HKTDC shall have the sole and absolute right to determine the
              Content and the way Content is provided to User. User confirms
              that HKTDC may, at its sole discretion, remove, modify, upgrade,
              suspend, cancel or terminate access to any and all of the Content
              at any time without prior notice to User.
            </p>

            <p className="terms-description">
              5.4. User acknowledges and agrees that HKTDC shall not be liable
              to any party for any limitation on the use of the Content set by
              HKTDC, or any unavailability of the Content at any time
            </p>

            <p className="terms-description">
              5.5. User acknowledges and agrees that certain Content offered via
              Sourcing may be provided by a third party, including but not
              limited to that provided by other Users of Sourcing and third
              party payment processors. Any such third party Content is the sole
              responsibility of the party who provided it, and HKTDC shall have
              no liability therefor, including its accuracy, propriety,
              lawfulness or truthfulness. HKTDC does not vet third party
              Content, nor endorse or recommend any person, product or service
              described therein, and shall not be liable to any User in
              connection with a Users reliance on the same.
            </p>

            <p className="terms-description">
              5.6. You acknowledge that the websites comprised within Sourcing
              rely on the internet which is an inherently unreliable and
              insecure medium of communication and that such unreliability and
              insecurity is beyond the control of HKTDC or HKTDC Affiliates. Any
              access to Sourcing or transactions through it may be subject to
              interruption, transmission blackout, internet viruses,
              unauthorised access, delayed transmission or incorrect data
              transmission.
            </p>

            <p className="terms-description">
              5.7. You are responsible for providing and maintaining necessary
              telecommunication lines, software and equipment to access Sourcing
              and to retrieve Content and for all associated costs.
            </p>

            <p className="terms-description">
              5.8. HKTDC reserves the right to suspend the provision of Sourcing
              or any part of it if and for so long as any circumstances (within
              or beyond our control) occur which prevent us from being able to
              provide it. The Content, features or functions which are available
              to one class of users of Sourcing may not be available to another
              class of users. We may group users into different classes using
              any criteria we deem fit.
            </p>

            <p className="terms-description">
              5.9. The amount of Content which may be available to a User during
              any period may from time to time be limited or changed by us at
              our sole and absolute discretion without notice to that user and
              may be different from that available to another user.
            </p>

            <h2 className="section-title">
              6. Transactions between Suppliers and Buyers
            </h2>

            <p className="terms-description">
              6.1. User acknowledges and agrees that HKTDC provides a platform
              only and is not a party to, nor is it in any way involved in, any
              transaction carried out through or facilitated by Sourcing as a
              buyer, supplier or trading counterparty, and HKTDC does not
              represent any supplier or buyer.
            </p>

            <p className="terms-description">
              6.2. User assumes full responsibility for all risks and
              liabilities in connection with the purchase or sale of products
              through Sourcing and acknowledges and agrees that HKTDC shall not
              be responsible or liable for any actions, demands, claims,
              damages, liabilities, costs, inconveniences, business disruption
              or expenditures of any nature that may arise as a result of or
              relating to any actual or contemplated transaction (including
              without limitation: the lawfulness of the goods or services
              offered for sale through Sourcing, the ability of suppliers to
              complete a sale (including but not limited to stock and logistics
              affairs) or of buyers to complete a purchase, any delay in the
              timing or other arrangements with respect to the buyer’s payment
              or seller’s delivery for any particular transaction(s)
              misrepresentation, quality, quantity, safety, mislabelling,
              defects in products or Content, insolvency or overdue payment,
              fraudulent schemes, breach of warranties and delivery mishap.
            </p>

            <p className="terms-description">
              6.3. In the event User has a dispute with any trading counterparty
              or other User, User agrees to indemnify and hold HKTDC harmless
              from any and all damages (including actual, direct, indirect,
              consequential and special damages) or expenses (including but not
              limited to those for claims, requests, actions, or demands
              (including court expenses and attorney fees)) suffered or incurred
              by HKTDC therefor
            </p>

            <p className="terms-description">
              6.4. By confirming a purchase at the end of the checkout process,
              you agree to accept and pay for the item(s) purchased and comply
              with any terms of sale imposed by the supplier. You understand and
              accept that any delay in payment may constitute a breach of your
              contract with the supplier, and you shall be solely responsible
              for such breach. To the fullest extent permissible under the
              applicable laws, you acknowledge, agree and accept that HKTDC has
              no control over and shall not be responsible or held liable for
              any such breach.
            </p>

            <p className="terms-description">
              6.5. By offering goods or services for sale through Sourcing, you
              understand that a binding contract may be formed when a User
              finally confirms a purchase at the end of the checkout process,
              and agree to fulfil such contract including by delivering such
              goods and/or services according to the buyers purchase, Content
              you have posted, and any collateral communications with the buyer,
              and you shall be solely responsible for any breach. Suppliers
              should hold and reserve stocks for buyers once they have placed
              their order, regardless of whether payment has been made. You
              acknowledge and accept that HKTDC has no control or liability over
              any breach.
            </p>

            <p className="terms-description">
              6.6. HKTDC reserves the right to charge a service fee for and/or
              commission on transactions taking place through Sourcing on
              reasonable prior notice to you in accordance with clause 2.5. You
              hereby authorize HKTDC to instruct any third party payment
              processor (such as PayPal) used in a transaction to deduct any and
              all outstanding service fees and/or commissions due from you from
              amounts you transact and transfer the same to HKTDC for settlement
              of its outstanding service fees
            </p>

            <p className="terms-description">
              6.7. User understands and accepts that each and every transaction
              taking place through Sourcing is limited to USD10,000.
            </p>

            <p className="terms-description">
              6.8. User acknowledges and agrees that when purchasing goods
              and/or services, any customs fees, taxes, levies or duties
              incurred from the transaction will be paid by them.
            </p>

            <p className="terms-description">
              6.9. User acknowledges and agrees that shipping rates provided on
              Sourcing are only estimations and that the final shipping rate
              depends on the courier when the shipment is picked. User assumes
              full responsibility when setting a free shipping option and/or
              accepting the estimated or actual shipping rate, as the case may
              be, provided by Easyship (http://www.easyship.com/) and/or any
              other logistics providers. User agrees to review and comply with
              the terms and conditions of Easyship and/or any other logistics
              providers. HKTDC shall not be responsible for any shipment terms,
              agreement terms, payment terms, and/or any disputes and conflicts
              between Easyship and Users and/or any other logistics providers.
              HKTDC does not endorse nor is it affiliated with Easyship and/or
              any other logistics providers, and shall not be liable to any User
              in connection with its acceptance of the terms and conditions,
              quality of the shipment or service delivered, delay in the
              shipment, or any loss or damages suffered by the User through its
              use of Easyship and/or any other logistics providers.
            </p>

            <p className="terms-description">
              6.10. When required by the government, law enforcement body, or
              obligee whose legitimate right has been injured, or forced by
              subpoena or other legal document, HKTDC may disclose a User’s
              identity and contact information. User agrees not to bring any
              action or claim against HKTDC for such disclosure.
            </p>

            <h2 className="section-title">7. Content Translation</h2>

            <p className="terms-description">
              Some of the Content in English may have been translated into
              languages other than English by automatic translation software.
              HKTDC is not responsible for any difference between the original
              language of Content and automatically translated language versions
              of the Content and, where there is any conflict, the English
              version shall prevail.
            </p>

            <h2 className="section-title">
              8. Disclaimer & Limitation of Liability
            </h2>
            <h2 className="section-title">
              8.1. Use of Sourcing is at your sole and absolute risk.
            </h2>

            <p className="terms-description">
              HKTDC and the HKTDC Affiliates do not warrant, guarantee or assume
              any liability and/or responsibility that:
            </p>

            <p className="terms-description">
              Certain information, statements, photographs and illustrations on
              Sourcing are provided by advertisers and exhibitors. The placing
              of such materials by HKTDC is made in good faith. HKTDC is not
              associated in any way with and is not the agent of the advertisers
              and exhibitors, and makes no representation or warranty regarding
              the advertisers and exhibitors, their products or the potential
              infringement of any intellectual property rights or other rights
              of any third parties and accepts no responsibility, liability or
              obligation, in relation to any of the said materials. Inclusion of
              any particular advertisement or other information does not mean
              that goods or services advertised or listed therein have the
              approval of or are endorsed by HKTDC or comply with applicable
              laws and regulations. It is recommended that normal precautions be
              taken before any business is transacted with any advertiser or
              exhibitor. Correspondence concerning any alleged infringement of
              any design, copyright, patent, trademark or other intellectual
              property rights, or any non-compliance with any law or regulation,
              should be addressed directly to the advertiser or exhibitor
              concerned and not to HKTDC;
            </p>

            <p className="terms-description">
              • the Content is accurate, adequate, true, current or reliable, or
              may be used for any purpose other than for general reference, or
              that any results, losses or damages whatsoever may be obtained
              from using the Content;
            </p>

            <p className="terms-description">
              • the Content is free of defect, error, omission, virus or
              anything which may change, erase, add to or damage your software,
              data, hardware, equipment or any infringement of intellectual
              property rights whatsoever; or
            </p>

            <p className="terms-description">
              • defects in Sourcing will be corrected. 8.2. To the maximum
              extent permitted by law, Sourcing is provided as is, as available
              and “with all faults”, and HKTDC hereby expressly disclaims any
              and all warranties, express or implied, including but not limited
              to, any warranties of condition, quality, durability, performance,
              accuracy, reliability, merchantability, non-infringement or
              fitness for a particular purpose. All such warranties,
              representations, conditions, and undertakings are hereby excluded.
            </p>

            <p className="terms-description">
              8.3. To the maximum extent permitted by law, HKTDC makes no
              representations or warranties about the validity, accuracy,
              correctness, reliability, quality, stability, completeness or
              currentness of any Content. HKTDC does not represent or warrant
              that the manufacture, importation, export, distribution, offer,
              display, purchase, sale and/or use of products or services offered
              or displayed on Sourcing does not violate any third party rights;
              and HKTDC makes no representations or warranties of any kind
              concerning any product or service offered or displayed on
              Sourcing.
            </p>

            <p className="terms-description">
              8.4. Any material downloaded or otherwise obtained through
              Sourcing is done at the Users sole discretion and risk and User is
              solely responsible for any damage to its computer system or loss
              of data that may result from the download of any such material. No
              advice or information, whether oral or written, obtained by any
              User from HKTDC or through or from Sourcing shall create any
              warranty on the part of HKTDC not expressly stated herein.
            </p>

            <p className="terms-description">
              8.5. HKTDC may make available to the User services or products
              provided by independent third parties, which may be subject to
              additional terms and conditions. No warranty or representation is
              made with regard to such services or products. In no event shall
              HKTDC or our affiliates be held liable for any such services or
              products.
            </p>

            <p className="terms-description">
              8.6. HKTDC shall not be liable for any special, direct, indirect,
              punitive, incidental or consequential damages or any damages
              whatsoever (including but not limited to damages for loss of
              profits or savings, business interruption, loss of information),
              whether in contract, negligence, tort, equity or otherwise or any
              other damages resulting from any of the following:
            </p>

            <p className="terms-description">
              <b> a.</b> use of or the inability to use Sourcing;
            </p>

            <p className="terms-description">
              <b> b.</b> any defect in goods, samples, data, information or
              services purchased or obtained from a User or any other third
              party through Sourcing;
            </p>

            <p className="terms-description">
              <b> c.</b> any delay in the timing or other arrangements with
              respect to any payment/issuance or denial thereof;
            </p>

            <p className="terms-description">
              <b> d.</b> violation of a third partys rights or claims or demands
              that Users manufacture, importation, export, distribution, offer,
              display, purchase, sale and/or use of products or services offered
              or displayed on Sourcing may violate or may be asserted to violate
              a third partys rights; or claims by any party that they are
              entitled to defense or indemnification in relation to assertions
              of rights, demands or claims by third parties;
            </p>

            <p className="terms-description">
              <b> e.</b> unauthorized access by third parties to data or private
              information of any User;
            </p>

            <p className="terms-description">
              <b> f.</b> statements or conduct of any User of Sourcing,
              including Content provided by Users or third parties; or
            </p>

            <p className="terms-description">
              <b> g.</b> any matters relating to Sourcing however arising,
              including negligence
            </p>

            <p className="terms-description">
              8.7. Notwithstanding and without prejudice to any of the foregoing
              provisions, if HKTDC is held liable for any reason, the aggregate
              liability of HKTDC, our employees, agents, affiliates,
              representatives or anyone acting on our behalf with respect to
              each User for all claims arising from the use of Sourcing during
              any calendar year shall be limited to the amount of fees the User
              has paid to HKTDC or HKTDC Affiliates during the calendar year.
              The preceding sentence shall not preclude the requirement by the
              User to prove actual damages.
            </p>

            <p className="terms-description">
              8.8. The limitations and exclusions of liability to you under the
              Terms shall apply to the maximum extent permitted by law and shall
              apply whether or not HKTDC has been advised of or should have been
              aware of the possibility of any such losses arising.
            </p>

            <p className="terms-description">
              8.8. The limitations and exclusions of liability to you under the
              Terms shall apply to the maximum extent permitted by law and shall
              apply whether or not HKTDC has been advised of or should have been
              aware of the possibility of any such losses arising.
            </p>

            <p className="terms-description">
              8.9. Without prejudice to the generality of the foregoing, all
              enquiries from Users of Sourcing directed to an advertiser or
              exhibitor will be transmitted to the advertiser or exhibitor by
              (in the case that the advertiser or exhibitor has an electronic
              mail address) electronic mail or (in the case that the advertiser
              or exhibitor does not have an electronic mail address) facsimile
              as soon as practicable. HKTDC shall in no circumstances be liable
              to the advertisers, exhibitors, Users or any other person for any
              error, delay, omission or inaccuracy in such transmission
              howsoever it occurs. Each advertiser, exhibitor and User
              unconditionally and irrevocably undertakes that it will not make
              any claim against HKTDC, its servants and/or agents for any losses
              or expenses that it may suffer or incur as a result of or
              otherwise in connection with such error, delay, omission or
              inaccuracy.
            </p>

            <h2 className="section-title">9. Intellectual Property</h2>

            <p className="terms-description">
              9.1. HKTDC respects the intellectual property rights of others,
              and we expect our Users to do the same.
            </p>

            <p className="terms-description">
              9.2. Listing of counterfeits, non-licensed replicas, or
              unauthorized products such as counterfeit designer garment,
              watches, handbags, sunglasses or other accessories is strictly
              prohibited on Sourcing, and no products can be displayed on
              Sourcing without the explicit permission of all the relevant
              intellectual property rights holders.
            </p>

            <p className="terms-description">
              9.3. Intellectual Property Rights complaints are dealt with in
              accordance with our IPR Complaint Procedure and Guidelines .
            </p>

            <p className="terms-description">
              9.4. The compilation of all Content on Sourcing is the exclusive
              property and copyright of HKTDC and/or HKTDC Affiliates and is
              protected by relevant local and international copyright laws and
              all software used on this site is the property of HKTDC and/or
              HKTDC Affiliates and/or the software suppliers and is also
              protected by relevant local and international copyright laws. No
              right, title or interest in any Content or software is transferred
              to you as a result of any use of or downloading of the same.
            </p>

            <p className="terms-description">
              9.5. All graphics, logos, page headers, button icons, script and
              service names are trademarks or trade dress of HKTDC and/or HKTDC
              Affiliates and HKTDCs trademarks and/or trade dress shall not be
              used in connection with any product or service that is not HKTDCs
              or HKTDC Affiliates, in any manner that is likely to cause
              confusion among public or in any manner that disparages or
              discredits HKTDC or HKTDC Affiliates. All other trademarks not
              owned by HKTDC or HKTDC Affiliates that appear on this site are
              the property of their respective owners, who may or may not be
              affiliated with, connected to, or sponsored by HKTDC or any HKTDC
              Affiliates.
            </p>

            <h2 className="section-title">10. Indemnity</h2>

            <p className="terms-description">
              10.1. User agrees to indemnify, defend and hold harmless HKTDC,
              its employees, agents, directors, officers, affiliates,
              representatives, assigns, third party suppliers of information or
              documents or anyone acting on its behalf from any liability,
              demand, claim, loss, expense (including but not limited to court
              expenses and attorney fees) and damages related to such User’s
              violation of this User Agreement (including but not limited to the
              representatives and warranties provided by User herein) and the
              materials incorporated by reference herein, use of Sourcing, or
              alleged or actual infringement or violation of the rights of
              others, including but not limited to the infringement of patent,
              copyright, trademark or any other intellectual property rights in
              connection with products, Content or materials offered or provided
              by User on or through Sourcing.
            </p>

            <p className="terms-description">
              10.2. User further agrees that HKTDC is not responsible and shall
              have no liability for any goods or services offered, supplied or
              contracted or intended to be offered or supplied, or orders placed
              or intended or contemplated to be placed, by other Users and/or
              third parties on or through Sourcing. User acknowledges that such
              matters are between Users and/or third parties (as appropriate)
              and in particular that third party Content, including without
              limitation misleading, incorrect, defamatory, offensive,
              infringing or illicit material is made available without the
              consent, vetting or scrutiny of HKTDC and the risk of damages from
              such material rests entirely with you, and falls within the scope
              of your indemnity at clause 10.1 above. If you become aware of any
              third party Content in violation of this User Agreement or the
              Listing Policy, please contact HKTDC without delay.
            </p>

            <p className="terms-description">
              10.3. HKTDC reserves the right to assume the sole and exclusive
              defense and control of any matter directly or indirectly
              associated with Sourcing subject to indemnification by Users,
              which shall not excuse Users’ indemnity obligations, in which
              event you shall cooperate with HKTDC at your own cost in full.
            </p>

            <p className="terms-description">
              10.3. HKTDC reserves the right to assume the sole and exclusive
              defense and control of any matter directly or indirectly
              associated with Sourcing subject to indemnification by Users,
              which shall not excuse Users’ indemnity obligations, in which
              event you shall cooperate with HKTDC at your own cost in full.
            </p>

            <h2 className="section-title">11. Hyperlinks</h2>

            <p className="terms-description">
              Any hyperlinks to other sites do not amount to an endorsement by
              us or Our Affiliates of those sites. Neither we nor Our Affiliates
              assume any responsibility for anything once you have exited
              Sourcing. HKTDC and HKTDC Affiliates are not responsible for
              examining or evaluating and HKTDC do not warrant any content of
              other sites and HKTDC do not assume any responsibility or
              liability for the actions, products, and contents of all these and
              any other third party.
            </p>

            <h2 className="section-title">12. Force Majeure</h2>

            <p className="terms-description">
              Under no circumstances shall HKTDC be held liable for any delay or
              failure or disruption of the content or services delivered through
              Sourcing resulting directly or indirectly from acts of nature,
              forces or causes beyond our reasonable control, including, without
              limitation, Internet failures, computer, telecommunications or any
              other equipment failures, electrical power failures, strikes,
              labor disputes, riots, insurrections, civil disturbances,
              shortages of labor or materials, fires, floods, storms,
              explosions, acts of God, war, governmental actions, orders of
              domestic or foreign courts or tribunals or non-performance by
              third parties.
            </p>

            <h2 className="section-title">13. Privacy Policy</h2>

            <p className="terms-description">
              For information about our privacy policies and practices, please
              refer to our Privacy Policy Statement. You agree to the use and
              disclosure of your information in the manner set out in our
              Privacy Policy Statement (as updated from time to time). Where
              Personal Data is collected in connection with Sourcing, you should
              also have reference to the relevant user agreements linked to the
              form through which your Personal Data is collected.
            </p>

            <h2 className="section-title">14. Affiliates</h2>

            <p className="terms-description">
              This User Agreement is for the benefit of us and Our Affiliates,
              and each of us and them has the right to enforce this User
              Agreement and/or Terms of Use in our or (as the case may be) their
              own name against you.
            </p>

            <h2 className="section-title">15. Termination</h2>
            <p className="terms-description">
              We may, in our sole discretion and at any time, without prior
              notice to you and without cause, terminate this User Agreement
              and/or all or any part of our provision of services, including
              Sourcing, to you. You will be unable to access your Content hosted
              on Sourcing and data pertaining to you, such as feedback and
              reputation, which you agree has no monetary value.
            </p>

            <h2 className="section-title">16. Notices</h2>
            <p className="terms-description">
              16.1. HKTDC may give notice to you by means of a general notice on
              the Sourcing websites. Any notice sent by such general notice is
              deemed to be received by the users or specified recipients on the
              day sent.
            </p>

            <p className="terms-description">
              16.2. You may give notice to HKTDC by electronic mail to
              hktdc@hktdc.org or ordinary mail to Hong Kong Trade Development
              Council, 38/F, Office Tower, Convention Plaza, 1 Harbour Road, Wan
              Chai, Hong Kong, attention: Sourcing or such other address as we
              may specify from time to time.
            </p>

            <p className="terms-description">
              16.2. You may give notice to HKTDC by electronic mail to
              hktdc@hktdc.org or ordinary mail to Hong Kong Trade Development
              Council, 38/F, Office Tower, Convention Plaza, 1 Harbour Road, Wan
              Chai, Hong Kong, attention: Sourcing or such other address as we
              may specify from time to time.
            </p>

            <h2 className="section-title">17. Entire Agreement</h2>

            <p className="terms-description">
              This User Agreement constitutes the entire agreement between HKTDC
              and you with respect to the subject matter hereof, and supersede
              all other written or oral agreements warranties and/or
              representations, and any provisions in any documents sent by
              either party to the other, with respect to such subject matter. In
              the event of inconsistency between this document and the policies
              and documents referred to herein, this document shall prevail.
            </p>

            <h2 className="section-title">18. Partial Invalidity</h2>

            <p className="terms-description">
              The illegality, invalidity or unenforceability of any provision of
              this User Agreement under the law of any jurisdiction shall not
              affect its legality, validity or enforceability under the laws of
              any other jurisdiction nor the legality, validity or
              enforceability of any other provision of this User Agreement.
            </p>

            <h2 className="section-title">19. Miscellaneous</h2>

            <p className="terms-description">
              19.1. No waiver of any breach under this User Agreement will
              amount to a waiver of any other breach, and no delay in enforcing
              any of this User Agreement constitutes a waiver of HKTDCs rights.
            </p>

            <p className="terms-description">
              19.2. The headings in this User Agreement are for convenience only
              and do not affect interpretation.
            </p>

            <p className="terms-description">
              19.3. We reserve the right to make changes to our site, policies,
              and any terms and conditions in this User Agreement at any time
              without notice
            </p>

            <p className="terms-description">
              19.4. HKTDC and you are independent contractors, and no agency,
              partnership, joint venture, employee-employer or
              franchiser-franchisee relationship is intended or created by this
              User Agreement.
            </p>

            <h2 className="section-title">
              20. Governing Law and Jurisdiction
            </h2>

            <p className="terms-description">
              This User Agreement shall be governed by the law of the Hong Kong
              Special Administrative Region. You agree to submit to the
              non-exclusive jurisdiction of the Hong Kong courts.
            </p>

            <h2 className="section-title">USER AGREEMENT RESEARCH SERVICES</h2>

            <p className="terms-description">
              HKTDC MAKES HKTDC Research AVAILABLE TO YOU SUBJECT TO THE TERMS
              AND CONDITIONS OF THIS USER AGREEMENT AND THE TERMS OF USE. THE
              TERMS AND CONDITIONS APPLY TO HKTDC Research OBTAINED THROUGH
              HKTDC’S PORTAL, WEBSITE, OR PROVIDED IN FORM OF DIGITAL
              APPLICATION, OR PROVIDED TO MOBILE PHONES.
            </p>

            <h2 className="section-title">1. Access</h2>

            <p className="terms-description">
              1.1 HKTDC may prevent or restrict any user from accessing HKTDC
              Research without need to give any reason.
            </p>

            <p className="terms-description">
              1.2 By using HKTDC Research, you warrant that:
            </p>

            <p className="terms-description">
              ( a ) all actions needed to authorise your entry into and
              performance of this User Agreement have been taken;
            </p>

            <p className="terms-description">
              ( b ) this User Agreement constitutes your legal, binding and
              enforceable obligations; and
            </p>

            <p className="terms-description">
              ( c ) the information provided in respect of your registration,
              purchase or subscription of the reports or articles is true,
              complete and current.{" "}
            </p>

            <h2 className="section-title">2. Your Information </h2>

            <p className="terms-description">
              2.1 You agree to provide such information as may be reasonably
              requested by HKTDC for the purpose of permitting your access and
              use of HKTDC Research, processing your purchase and/or
              subscription of items and/or service provided by HKTDC Research
              and establishing the means by which your payments will be made.
            </p>

            <p className="terms-description">
              2.2 Although Secure Socket Layer has been installed on HKTDC
              Research, all your information (including those relating to your
              credit card account, bank account and your personal data) is sent
              at your sole risk to HKTDC. For example, unauthorised third
              parties may be able to access such information during its
              transmission.
            </p>

            <p className="terms-description">
              2.3 You agree to notify HKTDC promptly if there is any change in
              your telephone number, address, electronic mail address and other
              personal data. Any such notification is binding on you, and may be
              accepted and acted on by HKTDC without any verification or
              enquiry.
            </p>

            <p className="terms-description">
              2.4 You agree that when you visit any of the Websites or use any
              of the Digital Application, HKTDC may collect website and
              application usage information (which may include your reading
              history and any advertisements you may have viewed), and
              information about your computer or other digital device and your
              internet connection. Such information includes your computers or
              digital device’s IP address, the type and version of browser and
              operating system you use, your internet domain and, if you have
              visited via a link from another website, the URL of the linking
              page. Such information may be used by HKTDC or provided to its
              contractor(s) for conducting research and analysis for HKTDC.
            </p>

            <p className="terms-description">
              2.5 You agree to the use and disclosure of your information in the
              manner set out in HKTDCs Privacy Policy Statement (as updated from
              time to time).
            </p>

            <h2 className="section-title">3. Usage of HKTDC Research</h2>

            <p className="terms-description">
              3.1 You may only use HKTDC Research for your own internal and
              non-commercial purpose. Except as aforesaid you may not copy,
              reproduce, publish, distribute, sell or, in any way directly or
              indirectly in competition with HKTDC, commercially exploit the
              Information and Digital Application available on HKTDC Research.
              In particular, you may not -re-sell any items purchased on HKTDC
              Research. You must not delete or change any copyright or other
              proprietary notice on any Information available from or through
              HKTDC Research.
            </p>

            <p className="terms-description">
              3.2 You may not transfer all or any of your rights or obligations
              under this User Agreement to any other person, or permit any other
              person to use your Login ID or Password (if applicable).
            </p>

            <p className="terms-description">
              3.3 The copyright and/or relevant intellectual property rights in
              the Information and Digital Application is owned by HKTDC, HKTDC
              Affiliates or Third Party Providers (as the case may be). For the
              avoidance of doubt, all content, such as text, graphics, logos,
              button icons, images, audio clips, digital downloads, data
              compilations, and/or software, that are available on HKTDC
              Research are the properties of and their copyrights belong to
              HKTDC, HKTDC Affiliates or relevant Third Party Providers (as the
              case may be). The compilation of all content available on HKTDC
              Research is the exclusive property of and its copyright belongs to
              HKTDC and/or HKTDC Affiliates or Third Party Providers (as the
              case may be) and is protected by relevant local and international
              copyright laws. All software used on HKTDC Research is the
              property of HKTDC and/or HKTDC Affiliates and/or the software
              suppliers and is also protected by relevant local and
              international copyright laws.
            </p>

            <p className="terms-description">
              3.4 All graphics, logos, page headers, button icons, script and
              service names related to the HKTDC Research are trademarks or
              trade dress of HKTDC and/or HKTDC Affiliates, and shall not be
              used in connection with any Information or service that is not
              provided by HKTDC or HKTDC Affiliates, or in any manner that is
              likely to cause confusion among public or in any manner that
              disparages or discredits HKTDC or HKTDC Affiliates.
            </p>

            <p className="terms-description">
              3.5 Our obligations to provide HKTDC Research will be suspended if
              and for so long as any circumstances occur which prevent us from
              being able to provide HKTDC Research.
            </p>

            <p className="terms-description">
              3.6 The Information, features or functions which are available to
              one class of users of HKTDC Research may not be available to
              another class of users. We may group users into different classes
              using any criteria we deem fit.
            </p>

            <p className="terms-description">
              3.7 Third Party Provider may be changed from time to time without
              prior notice.
            </p>

            <p className="terms-description">
              3.8 The amount of Information which may be available to a user
              during any period:
            </p>

            <p className="terms-description">
              ( a ) may from time to time be limited or changed by us without
              notice to that user;
            </p>
            <p className="terms-description">
              ( b ) may be different from that available to another user; and{" "}
            </p>
            <p className="terms-description">
              ( c ) may be different as between Website, Digital Application and
              any other supporting platform or device of HKTDC Research.
            </p>

            <h2 className="section-title">4. Payment</h2>

            <p className="terms-description">
              4.1 Access to some HKTDC Research content may be subject to a fee.
              All payments must be made in advance in Hong Kong currency or US
              currency. The price listed on the Website and/or Digital
              Application may be subject to additional costs, including any
              service fees charged by the payment service provider, taxes or due
              to exchange rate.
            </p>

            <p className="terms-description">
              4.2 You agree to pay all charges for the items purchased or
              subscribed by you at such prices and subscription rates and in
              accordance with the billing terms as are in effect from time to
              time. You are responsible for all taxes relating to your purchases
              and subscriptions through HKTDC Research. Your payments to HKTDC
              must be made in full without deduction, set-off or counterclaim.
            </p>

            <p className="terms-description">
              4.3 HKTDCs record of the charges payable by you is, save to the
              extent of manifest error, conclusive and binding on you
            </p>

            <p className="terms-description">
              4.4 Your online purchase and subscription to HKTDC Research may be
              paid by credit, debit or charge card acceptable to HKTDC, by
              payment method acceptable to online payment service provider(s)
              appointed by HKTDC or by mailing a cheque to us enclosing a copy
              of your purchase order (except for the purchase of HKTDC Research
              articles where payment by cheque is not applicable). You are
              solely responsible for all risks associated with the mailing of
              your cheque, and HKTDC shall not be responsible for any default,
              delay, failure or error in any mailing services. The relevant
              publications shall only be mailed to you upon HKTDCs receipt and
              clearance of the cheque
            </p>

            <p className="terms-description">
              4.5 You may pay through third party online payment service
              providers, including In-App Purchase provided by Apple Inc. In
              that event, you will also enter into contract with such third
              party online payment service providers. HKTDC shall not be held
              liable with respect to your transactions, loss, or disclosure of
              information in relation to such services provided by the online
              payment service providers.
            </p>

            <p className="terms-description">
              4.6 HKTDC may charge for any services and/or reports and articles
              in relation to HKTDC Research and will publish the amount or rate
              therefor, identifying the services and/or reports and articles
              concerned, by a general message on HKTDC Research, Website or
              Digital Application. By requesting, commencing or continuing the
              use of the relevant service or purchasing/subscribing to such
              reports and articles at any time after such notification, you
              agree to pay HKTDC such charges.
            </p>

            <p className="terms-description">
              4.6 HKTDC may charge for any services and/or reports and articles
              in relation to HKTDC Research and will publish the amount or rate
              therefor, identifying the services and/or reports and articles
              concerned, by a general message on HKTDC Research, Website or
              Digital Application. By requesting, commencing or continuing the
              use of the relevant service or purchasing/subscribing to such
              reports and articles at any time after such notification, you
              agree to pay HKTDC such charges.
            </p>

            <p className="terms-description">
              4.7 Your access to HKTDC Research may be suspended by HKTDC at any
              time in the event of late payment or non-payment or when any
              applicable credit limit has been reached. HKTDC is entitled
              thereupon to collect all accrued charges incurred by you through
              your credit card account and/or recover such amount from you as a
              debt due to HKTDC. Your access to HKTDC Research will not be
              restored until all such charges have been paid to HKTDC.
            </p>

            <p className="terms-description">
              4.8 HKTDC may from time to time prescribe a minimum mailing order
              amount applicable to the purchase and/or subscription of reports
              or articles from HKTDC Research.
            </p>

            <p className="terms-description">
              4.9 All your purchases and subscriptions, once completed on-line,
              are irrevocable and no return, refund, exchange or cancellation
              may be effected except with the written consent of HKTDC.
            </p>

            <h2 className="section-title">5. Equipment </h2>

            <p className="terms-description">
              5.1 You are responsible for providing and maintaining necessary
              telecommunication lines, software and equipment to access HKTDC
              Research and for all associated costs.
            </p>

            <p className="terms-description">
              5.2 HKTDC may change supporting platform and/or device, for the
              Website or Digital Application, through which HKTDC Research is
              available.
            </p>

            <h2 className="section-title">6. Login ID and Password </h2>

            <p className="terms-description">
              6.1 You agree to immediately notify HKTDC if you become aware of
              the loss, theft or unauthorised use of any password, Login ID or
              email address related to HKTDC Research. You agree to provide
              HKTDC with accurate, complete registration information and inform
              HKTDC of any changes to such information. For the purpose of
              confirming your compliance with these Terms, HKTDC reserves the
              right to monitor and record activity on the Website and Digital
              Application, including access to HKTDC Research.
            </p>

            <p className="terms-description">
              6.2 Certain areas or features of the HKTDC Research, Website
              and/or Digital Application may only be opened to registered users.
              You are solely responsible for protecting the confidentiality of
              your Login ID and Password and against any unauthorised use.
            </p>

            <p className="terms-description">
              6.3 Each Login ID and subscription is for your own use only. You
              agree not to share your Login ID or Password with any other
              person, or share or transfer your subscription. HKTDC does not
              allow multiple users (networked or otherwise) to access the HKTDC
              Research, Website and/or any Digital Application through a single
              Login ID and Password. HKTDC may cancel or suspend your access to
              the HKTDC Research, Website and/or Digital Application without
              prior notice for your violation of this clause, without any
              liability or further obligation to you.
            </p>

            <p className="terms-description">
              6.3 Each Login ID and subscription is for your own use only. You
              agree not to share your Login ID or Password with any other
              person, or share or transfer your subscription. HKTDC does not
              allow multiple users (networked or otherwise) to access the HKTDC
              Research, Website and/or any Digital Application through a single
              Login ID and Password. HKTDC may cancel or suspend your access to
              the HKTDC Research, Website and/or Digital Application without
              prior notice for your violation of this clause, without any
              liability or further obligation to you.
            </p>

            <p className="terms-description">
              6.4 You agree to validate and complete your registration before
              using the HKTDC Research service you subscribed. HKTDC may limit
              or suspend your access to HKTDC Research before the registration
              is validated and completed.
            </p>

            <h2 className="section-title">7. User-Created Content </h2>

            <p className="terms-description">
              The Website and Digital Application may include comments
              capability, discussion groups and other public areas or features
              that allow feedback to HKTDC Research and interaction between
              users and HKTDC Research representatives. You are responsible for
              all content you post on the Website and/or Digital Application.
              You agree to comply with the HKTDC Research Comment Policy when
              using any of the above features. 8. Disclaimer & Limitation of
              Liability
            </p>

            <p className="terms-description">
              8.1 Use of HKTDC Research is at your sole risk.
            </p>

            <p className="terms-description">
              8.2 HKTDC and the HKTDC Affiliates do not warrant, guarantee or
              assume any responsibility that:{" "}
            </p>

            <p className="terms-description">
              ( a ) the Information is accurate, adequate, current or reliable,
              or may be used for any purpose other than for general reference,
              or that any results may be obtained from using the Information. In
              particular, HKTDC reserves the right to change the prices for the
              items available in HKTDC Research at any time without notice;
            </p>

            <p className="terms-description">
              ( b ) the Information is free of defect, error, omission, virus or
              anything which may change, erase, add to or damage your software,
              data or equipment;
            </p>

            <p className="terms-description">
              ( c ) access to HKTDC Research will be available or be
              uninterrupted;
            </p>

            <p className="terms-description">
              ( d ) defects in HKTDC Research will be corrected;
            </p>

            <p className="terms-description">
              ( e ) the items purchased or subscribed may not be lost in the
              delivery; or{" "}
            </p>

            <p className="terms-description">
              ( f ) the items purchased or subscribed may be delivered according
              to the delivery schedule.
            </p>

            <p className="terms-description">
              8.3 The Information may not be regarded as any recommendation or
              endorsement by HKTDC for any purpose with respect to any person,
              product or service.
            </p>

            <p className="terms-description">
              8.4 Without limiting the foregoing, HKTDC Research is provided to
              you on an AS IS AND AS AVAILABLE basis. HKTDC Research IS FOR YOUR
              PERSONAL USE ONLY AND WE MAKE NO REPRESENTATION OR WARRANTY OF ANY
              KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
              ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <p className="terms-description">
              8.5 In no event will we or our Affiliates be liable to you or any
              other person for any direct, indirect, incidental, special,
              punitive or consequential damages, including any loss of business
              or profit, arising out of any use, or inability to use, the
              Information and/or your purchase, or inability to purchase,
              reports or articles from HKTDC Research.
            </p>

            <p className="terms-description">
              8.6 You will exercise and rely solely on your own skill and
              judgement in your use and interpretation of the Information and/or
              the reports or articles available from HKTDC Research. You are
              responsible to ensure that your use of such Information and/or the
              reports and/or articles available from HKTDC Research complies
              with all applicable legal requirements.
            </p>

            <p className="terms-description">
              8.7 HKTDC will mail to you the hard copy reports purchased by you
              by ordinary mail, and HKTDC does not warrant, guarantee or
              undertake that the hard copy reports purchased by you will be
              received by you at any specific time or at all. You are solely
              responsible for all risks associated with the mailing of such hard
              copy reports, and HKTDC shall not be responsible for any default,
              delay, failure or error in any mailing services. The digital
              copies (PDF) or hard copies of the reports received by you may be
              slightly adjusted and not identical to the articles as found on
              the Website.
            </p>

            <p className="terms-description">
              8.8 HKTDC will send a hyperlink to the digital copy (PDF) of the
              item purchased or subscribed by you by email, and HKTDC does not
              warrant, guarantee or undertake that the item purchased or
              subscribed by you will be received by you at any specific time or
              at all. You are solely responsible for all risks associated with
              the email delivery of such item, and HKTDC shall not be
              responsible for any default, delay, failure or error in email
              delivery.
            </p>

            <p className="terms-description">
              8.9 The limitation of liability contained in this User Agreement
              will apply to the fullest extent permitted by applicable laws.
            </p>

            <h2 className="section-title">9. Changes to HKTDC Research </h2>

            <p className="terms-description">
              9.1 HKTDC may at any time change or remove the contents or any
              function, aspect of feature, or change the presentation, of HKTDC
              Research, the Website or Digital Application, including hours of
              availability and equipment (hardware and software) needed for
              access or use.
            </p>

            <p className="terms-description">9.2 HKTDC may at any time:</p>

            <p className="terms-description">
              ( a ) change, add to, delete or modify any provisions in this User
              Agreement; and
            </p>

            <p className="terms-description">
              ( b ) change the amount or method of calculation of the charges
              payable by you or impose new charges.{" "}
            </p>

            <p className="terms-description">
              9.3 Any change, removal or addition under Clauses 9.1 or 9.2 above
              will be effective immediately upon notice thereof being posted on
              HKTDC Research, the Website or Digital Application, or otherwise
              given to you. Any use of HKTDC Research by you after such notice
              will constitute your acceptance of such change, removal or
              addition.
            </p>

            <h2 className="section-title">10. Indemnity </h2>

            <p className="terms-description">
              You agree to defend, indemnify and hold us and the HKTDC
              Affiliates harmless from and against all liabilities, damages,
              claims, actions, costs and expenses (including without limitation
              legal fees), in connection with or arising from your breach of any
              of this User Agreement and/or your use of HKTDC Research. We may,
              if necessary, participate in the defence of any claim or action
              and any negotiations for settlement. No settlement which may
              adversely affect our rights or obligations shall be made without
              our prior written approval. We reserve the right, at our own
              expense and on notice to you, to assume exclusive defence and
              control of any claim or action.
            </p>

            <h2 className="section-title">11. Hyperlinks</h2>

            <p className="terms-description">
              Any hyperlinks to other sites do not amount to an endorsement by
              us or our Affiliates of those sites. Neither we nor our Affiliates
              assume any responsibility for anything once you have exited HKTDC
              Research, the Website or Digital Application.
            </p>

            <h2 className="section-title">12. Affiliates</h2>

            <p className="terms-description">
              This User Agreement is for the benefit of us and our Affiliates,
              and each of us and them has the right to enforce this User
              Agreement in our or (as the case may be) their own name against
              you.
            </p>

            <h2 className="section-title">13. Termination</h2>

            <p className="terms-description">
              HKTDC may at any time terminate or suspend your access to and/or
              use of all or part of the HKTDC Research, Website and/or Digital
              Application (including any Information therein) with immediate
              effect, without need to give any reason. Termination of your right
              to access or use HKTDC Research will not affect any right accrued
              to HKTDC or you under this User Agreement prior to such
              termination or any purchases and/or subscriptions made prior
              thereto.
            </p>

            <h2 className="section-title">14. Changes to HKTDC Research</h2>

            <p className="terms-description">
              14.1 HKTDC may give notice to you by means of a general notice on
              HKTDC Research, the Website or Digital Application, or by ordinary
              mail to your address, by facsimile to your facsimile number or by
              electronic mail to your electronic mail address on HKTDCs record.
              Any notice sent by a general notice on HKTDC Research, the Website
              or Digital Application or to your facsimile number or electronic
              mail address is deemed to be received on the day sent or 7 working
              days of posting.
            </p>

            <p className="terms-description">
              14.2 You may give notice to HKTDC by electronic mail to
              research_enquiry@hktdc.org or ordinary mail to Hong Kong Trade
              Development Council, 38/F, Office Tower, Convention Plaza, 1
              Harbour Road, Wan Chai, Hong Kong, attention: Marketing and
              Customer Service Department or such other address as we may
              specify from time to time.
            </p>

            <h2 className="section-title">15. Entire Agreement</h2>

            <p className="terms-description">
              This User Agreement and the Terms of Use constitute the entire
              agreement between HKTDC and you with respect to the subject matter
              hereof, and supersede all other written or oral agreements and
              representations, and any provisions in any documents sent by
              either party to the other, with respect to such subject matter. In
              the event of inconsistency between this User Agreement and the
              Terms of Use, this User Agreement shall prevail.
            </p>

            <h2 className="section-title">16. Partial Invalidity</h2>

            <p className="terms-description">
              The illegality, invalidity or unenforceability of any provision of
              this User Agreement under the law of any jurisdiction shall not
              affect its legality, validity or enforceability under the laws of
              any other jurisdiction nor the legality, validity or
              enforceability of any other provision.
            </p>

            <h2 className="section-title">17. Miscellaneous</h2>

            <p className="terms-description">
              17.1 No waiver by either party of any breach under this User
              Agreement will amount to a waiver of any other breach. The
              headings in this User Agreement are for convenience only and do
              not affect interpretation.
            </p>

            <p className="terms-description">
              17.2 This User Agreement is provided in English and Chinese
              versions. If there is any inconsistency or difference between the
              Chinese and the English versions, the English version will
              prevail.
            </p>

            <h2 className="section-title">
              18. Governing Law and Jurisdiction{" "}
            </h2>

            <p className="terms-description">
              This User Agreement and the sale and purchase from HKTDC Research
              and subscription from HKTDC Research and any use thereof shall be
              governed by the law of the Hong Kong Special Administrative
              Region. You agree to submit to the non-exclusive jurisdiction of
              the Hong Kong courts.
            </p>
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
