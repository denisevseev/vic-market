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
      <h3 className="terms-subtitle">Victorum Terms & Conditions</h3>

      <h3 className="terms-subtitle">TERMS OF USE OF OUR WEBSITE </h3>

      <TabPanel value={value} index={0}>
        <div className="defined-terms-section ta-start">
          <p className="terms-description">
            PLEASE READ THE TERMS OF USE SET FORTH BELOW, AS THEY APPLY TO YOUR
            USE OF OUR WEBSITE. BY USING OUR WEBSITE AND OUR SERVICE YOUR USE OF
            THE WEBSITE SIGNIFIES YOUR ACCEPTANCE OF THESE TERMS OF USE AND
            AGREEMENT TO BE BOUND BY THEM AND ANY AND ALL OTHER APPLICABLE TERMS
            REFERENCED HEREIN ABSOLUTELY.
          </p>

          <h3 className="terms-subtitle">1. Changes to Website </h3>

          <p className="terms-description">
            We may, in our sole discretion and at any time, without notice to
            you, add to, amend or remove any Information from the Website, or
            alter the presentation, substance, or functionality of the Website.
          </p>

          <h3 className="terms-subtitle">2. Change of Terms </h3>

          <p className="terms-description">
            We may, in our sole discretion and at any time, without notice to
            you, add to, amend or remove any Information from the Website, or
            alter the presentation, substance, or functionality of the Website.
          </p>

          <p className="terms-description">
            In addition to these Terms of Use, the use of Services offered on
            the Website may be subject to further terms and conditions.
            Specifically:
          </p>

          <p className="terms-description">
            the use of our Business-Stat Online service is also subject to our
            User Agreement for Business-Stat Online
          </p>

          <p className="terms-description">
            the use of our Sourcing and hktdc.com Small Orders is also subject
            to our User Agreement for Sourcing
          </p>

          <p className="terms-description">
            the use of our Buying Leads is also subject to our Membership
            Agreement for Buying Leads
          </p>

          <p className="terms-description">
            the use of our HKTDC Research service is also subject to our User
            Agreement for HKTDC
          </p>

          <p className="terms-description">
            Research the submission of applications for HKTDC Fairs using our
            Exhibitor Online Application Service is also subject to our Terms of
            Application and Exhibition Rules & Regulations In the event of any
            conflict, the specific Services terms and conditions shall prevail
            over these Terms of Use.
          </p>

          <h3 className="terms-subtitle">3. Users Conduct</h3>

          <p className="terms-description">
            As a condition of your use of the Website, you must not:
          </p>

          <p className="terms-description">
            trespass, break into, access, use or attempt to trespass, break
            into, access or use any other parts of our servers, and/or any data
            areas for which you have not been authorised by us; restrict or
            inhibit any other user from using and enjoying the Website;
          </p>

          <p className="terms-description">
            post or transmit any unlawful, fraudulent, libellous, defamatory,
            obscene, pornographic, profane, threatening, abusive, hateful,
            offensive, or otherwise objectionable or unreasonable Information of
            any kind, including without limitation any transmissions
            constituting or encouraging conduct that may constitute a criminal
            offence, give rise to civil liability, or otherwise violate any
            local, state, national or foreign law;
          </p>

          <p className="terms-description">
            post or transmit any advertisements, solicitations, chain letters,
            pyramid schemes, investment opportunities or schemes or other
            unsolicited commercial communication, or engage in spamming or
            flooding;
          </p>

          <p className="terms-description">
            post or transmit any Information or software which contains any
            virus, trojan horse, worm or other harmful component;
          </p>

          <p className="terms-description">
            post, publish, transmit, reproduce, distribute, exploit or use in
            any way any Information obtained through the Website for or in
            connection with the following purposes: conducting any direct
            marketing activities and/or disseminating or circulating any part of
            the content of any unsolicited publicity or advertising materials;
            advertising and/or promoting any goods and services; sale or
            exchange of any part of the Information obtained through the Website
            for any benefits, gain, profit or rewards;
          </p>

          <p className="terms-description">
            or any other commercial purposes; and/or upload, post, publish,
            transmit, reproduce, or distribute in any way, Information obtained
            through the Website which is protected by copyright, or other
            proprietary right, or create derivative works with respect thereto,
            without the prior written permission of the copyright owner or
            rightholder. You have no rights in or to the Information available
            from time to time on the Website and you will not use the
            Information available from time to time on the Website in any manner
            or for any purpose, except as permitted under these Terms of Use.
          </p>

          <h3 className="terms-subtitle">4. Access</h3>

          <p className="terms-description">
            We reserve the right at all times to prohibit or deny your access to
            the Website or any part thereof immediately and without notice,
            where we are of the opinion that you have breached any of the terms
            contained in the Terms of Use or that such prohibition or denial is
            appropriate, desirable or necessary in our sole discretion.
          </p>

          <h3 className="terms-description">
            Whilst we implement appropriate security measures to control access
            to the Website (please see our Privacy Policy Statement for further
            details), you must keep your log-in details (if any) confidential
            and ensure that only you or your authorized employees access the
            Services for proper purposes.
          </h3>

          <h3 className="terms-subtitle">5. Third Party Information</h3>

          <p className="terms-description">
            The Information may contain Information provided by Third Party
            Providers or sourced by HKTDC from other references or sources. The
            Information on the Website may not be regarded as any recommendation
            or endorsement by HKTDC for any purpose with respect to any person,
            product or service.
          </p>

          <p className="terms-description">
            HKTDC is not responsible if any such Information is not up-to-date;
            HKTDC does not separately verify such Information. Accordingly we do
            not accept any responsibility whatsoever in respect of such
            Information. Any use of and reliance on such Information is at your
            own risk.
          </p>

          <p className="terms-description">
            In particular, the views, comments and opinions expressed in the
            HKTDC Forum do not represent the views of or any endorsement by
            HKTDC. You are cautioned as to the reliability and accuracy of
            opinions expressed in the HKTDC Forum.
          </p>

          <h3 className="terms-subtitle">6. Links to and from the Website </h3>

          <p className="terms-description">
            The links on the Website may take you to other sites and you
            acknowledge and agree that HKTDC and the HKTDC Affiliates have no
            responsibility for the accuracy or availability of any Information
            provided by linked websites.
          </p>

          <p className="terms-description">
            Links to other websites do not constitute an endorsement by HKTDC of
            such websites or the Information, products, advertising or other
            materials available on those websites.
          </p>

          <h3 className="terms-subtitle">7. Indemnity</h3>

          <p className="terms-description">
            You agree to on demand defend, indemnify and hold us and the HKTDC
            Affiliates harmless from and against all liabilities, damages,
            claims, actions, costs and expenses (including without limitation
            legal fees), in connection with or arising from your breach of any
            provision in these Terms of Use and/or your use of the Website and
            /or the Information available from time to time on the Website for
            any purpose whatsoever (whether or not constituting a breach of any
            provision in these Terms of Use). We may, if necessary, participate
            in the defence of any claim or action and any negotiations for
            settlement. No settlement which may adversely affect our rights or
            obligations shall be made without our prior written approval. We
            reserve the right, at our own expense and on notice to you, to
            assume exclusive defence and control of any claim or action.
          </p>

          <h3 className="terms-subtitle">8. Intellectual Property Rights</h3>

          <p className="terms-description">
            All intellectual property rights subsisting in respect of the
            Website belong to HKTDC or have been lawfully licensed to HKTDC for
            use on the Website. All rights under applicable laws are hereby
            reserved. Except with the express permission of HKTDC, you are not
            allowed to upload, post, publish, reproduce, transmit or distribute
            in any way any component of the Website itself or create derivative
            works with respect thereto, as the Website is copyrighted under
            applicable laws.
          </p>

          <p className="terms-description">
            HKTDC is very serious about IPR infringement and has established
            guidelines to handle such cases. Please refer to our IPR Complaint
            Procedure and Guidelines.
          </p>

          <h3 className="terms-subtitle">9. Limited Liability and Warranty </h3>

          <p className="terms-description">
            All Information available from time to time on the Website is for
            your general reference only. HKTDC does not accept any
            responsibility whatsoever in respect of such Information.
          </p>

          <p className="terms-description">
            YOUR ACCESS TO AND USE OF OUR WEBSITE IS AT YOUR SOLE RISK AND IS
            PROVIDED AS IS, AS AVAILABLE. THE WEBSITE IS FOR YOUR PERSONAL USE
            ONLY AND WE MAKE NO REPRESENTATION OR WARRANTY OF ANY KIND, EXPRESS
            OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES ON
            MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE.
          </p>

          <p className="terms-description">
            OUR ENTIRE LIABILITY AND YOUR EXCLUSIVE REMEDY WITH RESPECT TO THE
            WEBSITE OR OTHERWISE, IS RE-PERFORMANCE OF DEFECTIVE SERVICES. IN
            JURISDICTIONS WHICH DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
            CERTAIN TYPES OF LIABILITY, OUR LIABILITY WILL BE LIMITED TO THE
            MAXIMUM EXTENT PERMITTED BY LAW. WE DO NOT ENDORSE, WARRANT OR
            GUARANTEE ANY INFORMATION, MATERIAL, PRODUCT OR SERVICE OFFERED
            THROUGH US OR OUR WEBSITE. WE ARE NOT AND WILL NOT BE A PARTY TO ANY
            TRANSACTION BETWEEN YOU AND ANY THIRD PARTY.
          </p>

          <p className="terms-description">
            Neither HKTDC nor any of the HKTDC Affiliates shall guarantee or
            assume any responsibility that:
          </p>

          <p className="terms-description">
            the Information on the Website is accurate, adequate, current or
            reliable, or may be used for any purpose other than for general
            reference;
          </p>

          <p className="terms-description">
            the Information on the Website is free of defect, error, omission,
            virus or anything which may change, erase, add to or damage your
            software, data or equipment;
          </p>

          <p className="terms-description">
            messages sent through the internet including in connection with the
            Services will be free from interception, corruption, error, delay or
            loss;
          </p>

          <p className="terms-description">
            access to the Website will be available or be uninterrupted;
          </p>

          <p className="terms-description">
            use of the Website or Services will achieve any particular result;
            or defects in the Website will be corrected.
          </p>

          <p className="terms-description">
            Without limiting the generality of the foregoing, in no event will
            the HKTDC or the HKTDC Affiliates be liable to you or any other
            person for any direct, indirect, incidental, special, punitive or
            consequential loss or damages, including any loss of business or
            profit, arising out of any use, or inability to use, the Information
            or the Services, even if HKTDC or the HKTDC Affiliates have been
            advised of the possibility of such loss or damages.
          </p>

          <p className="terms-description">
            In addition, HKTDC accepts no responsibility for or liability in
            respect of Information or services provided by Third Party
            Providers, nor does it endorse such Third Party Providers. You
            acknowledge and accept that any dispute in relation to such
            Information or services is unrelated to HKTDC and is solely a matter
            between you and such Third Party Provider.
          </p>

          <p className="terms-description">
            You will exercise and rely solely on your own skill and judgment in
            your use and interpretation of the Information and use of the
            Services. You are responsible to ensure that your use of the
            Information obtained through the Website and the Services in any way
            for any purpose whatsoever complies with all applicable legal
            requirements, including without limitation, the data protection law
            applicable to you.
          </p>

          <p className="terms-description">
            Without prejudice to the foregoing, if your use of the Services does
            not proceed satisfactorily and/or where applicable you do not
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

          <h3 className="terms-subtitle">10. Privacy Policy </h3>

          <p className="terms-description">
            For information about our privacy policies and practices, please
            refer to our Privacy Policy Statement. You agree to the use and
            disclosure of your information in the manner set out in our Privacy
            Policy Statement (as updated from time to time). Where personal data
            is collected in connection with the Services, you should also have
            reference to the relevant user agreements linked to the form through
            which your personal data is collected.
          </p>

          <h3 className="terms-subtitle">
            For information on our use of cookies, please also refer to our
            Privacy Policy Statement.
          </h3>

          <p className="terms-description">
            For information on our use of cookies, please also refer to our
            Privacy Policy Statement.
          </p>

          <h3 className="terms-subtitle">11. Partial Invalidity</h3>

          <p className="terms-description">
            The illegality, invalidity or unenforceability of any provision of
            these Terms of Use under the law of any jurisdiction shall not
            affect its legality, validity or enforceability under the laws of
            any other jurisdiction nor the legality, validity or enforceability
            of any other provision.
          </p>

          <h3 className="terms-subtitle">12. Several Users</h3>

          <p className="terms-description">
            If there are two or more persons adhering to these Terms of Use as
            user, their liability under the Terms of Use is joint and several,
            and their rights are joint.
          </p>

          <h3 className="terms-subtitle">13. Miscellaneous</h3>

          <p className="terms-description">
            No waiver of any breach under these Terms of Use will amount to a
            waiver of any other breach. The headings in these Terms of Use are
            for convenience only and do not affect interpretation.
          </p>

          <h3 className="terms-subtitle">14. Termination</h3>

          <p className="terms-description">
            We may, in our sole discretion and at any time, without prior notice
            to you and without cause, terminate all or any part of our Services
            to you and consequentially prohibit your right to access to the
            Services and/or the Website and remove any information and data
            linked to your profile or registered account.
          </p>

          <h3 className="terms-subtitle">15. Governing Law and Jurisdiction</h3>

          <p className="terms-description">
            These Terms of Use shall be governed by the law of the Hong Kong
            Special Administrative Region. You agree to submit to the
            non-exclusive jurisdiction of the Hong Kong courts.
          </p>

          <h3 className="terms-subtitle">16. Chinese Version</h3>

          <p className="terms-description">
            If there is any conflict or difference between the Chinese version
            of the Terms of Use and its English version, the English version
            prevails. If any part of the Chinese version is unclear, reference
            should be made to the English version. The Chinese version may not
            be translated into English for the purpose of comparing with or
            interpreting the English version.
          </p>

          <h3 className="terms-subtitle">USER AGREEMENT RESEARCH SERVICES </h3>

          <h3 className="terms-subtitle">PRIVACY POLICY STATEMENT</h3>

          <h3 className="terms-subtitle">
            A safe space for your personal and corporate data!
          </h3>

          <h3 className="terms-subtitle">Victorum Privacy Policy </h3>

          <h3 className="terms-subtitle">1. Abstract & Introduction </h3>

          <p className="terms-description">
            Victorum Holdings Ltd., Hong Kong (referred to as Victorum, we, us
            and our) takes individuals and corporate privacy seriously.
          </p>

          <p className="terms-description">
            This policy explains our practices and guidelines and applies to
            information collection and use, including but not limited to, your
            visit and usage of our online platform www.victorum-trade.com, our
            social media accounts, apps and other online and offline processes
            (referred to as “Website”, Site, “Platform”, “App” and “Channels”).
          </p>

          <p className="terms-description">
            We truly respect your privacy and we promise always to implement the
            latest technologies to protect the security and confidentiality of
            the personal data which are transmitted to us.
          </p>

          <p className="terms-description">
            Further we are always trying to limit the personal data collected
            and stored to the minimum required to provide our online and offline
            services.
          </p>

          <p className="terms-description">
            Our team is properly trained and only authorized employees have to
            access personal data which is never disclosed to external parties
            unless you have agreed or we are required by law.{" "}
          </p>

          <p className="terms-description">
            All our data stored, is electronically, physically and
            password-protected and we use the latest encryption technology to
            protect our sites and channels as well as certain secured areas of
            our website and CRM.
          </p>

          <h3 className="terms-subtitle">2. Collection & Storage Policy </h3>

          <p className="terms-description">
            In order to provide a better service to our visitors and clients, we
            may, in the course of and in relation to provision of our services
            or products, collect and process the following information about:
          </p>

          <p className="terms-description">
            <b>a.</b> information (such as, your name, your company name,
            address, telephone number, mobile phone number, fax number, email
            address, website, nature of business and product/service details
            etc. of your company) when you register with us, use our services,
            attend our functions, or communicate with us. In some circumstances,
            we may also collect personal identification data such as your
            passport or identity card number, date of birth and/or nationality
            for security and verification purposes;
          </p>

          <p className="terms-description">
            <b>b.</b>the content of any communications you send to us, for
            example, to report a problem or to submit queries, concerns or
            comments regarding the Site or its content
          </p>

          <p className="terms-description">
            <b>c.</b>information from surveys that we may, from time to time,
            run on our websites and/or social media channels for research and
            analysis purposes.
          </p>

          <p className="terms-description">
            The provision of personal data by you is necessary in order for us
            to provide you with the requested services and for us to perform our
            contractual obligations if any to you In case you do not supply such
            data or you supply such data incompletely we may be unable to
            provide the requested services
          </p>

          <p className="terms-description">
            Please keep in mind, when you browse the Site, we will collect the
            basic technical information that your browser sends to the Site such
            as
          </p>

          <p className="terms-description">
            <b>a.</b> your browser type and language#
          </p>

          <p className="terms-description">
            <b>b.</b> access times
          </p>

          <p className="terms-description">
            <b>c.</b> the address of the site from which you came to the Site
          </p>

          <p className="terms-description">
            <b>d.</b> your Internet Protocol (IP) address, or click stream data
            within our website (i.e. the actions taken in connection with the
            Site) etc.
          </p>

          <p className="terms-description">
            <b>d.</b> your Internet Protocol (IP) address, or click stream data
            within our website (i.e. the actions taken in connection with the
            Site) etc.
          </p>

          <p className="terms-description">
            We collect such technical information during your visit of our
            online platforms through our automatic data collection tools, which
            may include cookies (please read the section about the usage of
            cookies below carefully) and other commonly used online
            technologies.
          </p>

          <h3 className="terms-subtitle">3. Use & Storage of Information</h3>

          <p className="terms-description">
            Purposes for which information are used:
          </p>

          <p className="terms-description">
            <b>a.</b> processing applications
          </p>

          <p className="terms-description">
            <b>b.</b> providing services and information offered through the
            Site
          </p>

          <p className="terms-description">
            <b>c.</b> providing services to facilitate trade between Hong Kong
            and overseas (or otherwise), and providing enquirers with contact
            and business information
          </p>

          <p className="terms-description">
            <b>d.</b> our operations, e.g., market and product research,
            purchase and sales of products, goods and raw materials, forwarding
            of buy and sell requests, exchange of buy and sell orders and
            introduction of buy/sell parties to each other
          </p>

          <p className="terms-description">
            <b>d.</b> our operations, e.g., market and product research,
            purchase and sales of products, goods and raw materials, forwarding
            of buy and sell requests, exchange of buy and sell orders and
            introduction of buy/sell parties to each other
          </p>

          <p className="terms-description">
            <b>e.</b> announcements on our website related to local Hong Kong
            and international trade fairs, promotional events and similar events
            related to trade fairs
          </p>

          <p className="terms-description">
            <b>f.</b> distribution of Victorum publications, white papers and
            other research material
          </p>

          <p className="terms-description">
            <b>g.</b> promoting our services or products (and those of our
            business partners and counterparts engaged in similar or peripheral
            activities, such as business matching services, sourcing, client
            introduction and market analysis
          </p>

          <p className="terms-description">
            <b>h.</b> legal proceedings including the collection of overdue
            payments
          </p>

          <p className="terms-description">
            <b>i.</b> prevention or detection of fraudulent activities, crime,
            and protection of the security and safety of our online platforms
          </p>

          <p className="terms-description">
            <b>j.</b> verification of our clients´ identities
          </p>

          <p className="terms-description">
            Your personal identification data (such as date of birth and
            nationality, etc.) as well as your corporate information (such as
            corporate details, certificates of incorporation, etc.) will be used
            solely for the purposes described in these guidelines.
          </p>

          <p className="terms-description">
            We may conduct direct marketing via fax, email, direct mail,
            telephone, social media, messenger services and other means of
            communication whether now or hereafter known, or send
            email-newsletters to you.
          </p>

          <p className="terms-description">
            In case you chose once to receive marketing and/or promotional
            materials, you can always unsubscribe by messaging us to
            subscription@victorum-trade or by clicking the unsubscribe link at
            the bottom of our online messages.
          </p>

          <h3 className="terms-subtitle">4. Confidency & Disclosure </h3>

          <h3 className="terms-subtitle">
            We will keep the personal data we hold confidential but may provide
            your personal data to:{" "}
          </h3>

          <p className="terms-description">
            <b>a.</b> personnel, agents, advisers, auditors, contractors,
            financial institutions, and service providers in connection with our
            operations or services
          </p>

          <p className="terms-description">
            <b>b.</b> our overseas offices, branches, companies within the
            Victorum Group of Companies, related affiliates, business partners
            and and other third party service and technology providers
          </p>

          <p className="terms-description">
            <b>c.</b> the public, including persons enquiring about Hong Kong
            companies
          </p>

          <p className="terms-description">
            <b>d.</b> persons under a duty of confidentiality to us
          </p>

          <p className="terms-description">
            <b>e.</b> persons and governmental authorities to whom we are
            required to make disclosure under applicable laws in or outside Hong
            Kong
          </p>

          <p className="terms-description">
            <b>f.</b> actual or proposed transferees or participants of our
            services
          </p>

          <p className="terms-description">
            We may provide your personal data as required or permitted by law to
            comply with a summons, subpoena or similar legal process or
            government request, or when we believe in good faith that disclosure
            is legally required or otherwise necessary to protect our rights and
            property, or the rights, property or safety of others, including but
            not limited to advisers, law enforcement, judicial and regulatory
            authorities in or outside Hong Kong.
          </p>

          <p className="terms-description">
            We may also transfer your personal data to a third party that
            acquires all or part of our assets or shares, or that succeeds us in
            carrying on all or a part of our business, whether by merger,
            acquisition, reorganization or otherwise.
          </p>

          <p className="terms-description">
            To prevent and detect crimes and to protect the security and safety
            of our events and activities, we may provide your personal
            identification data such as your full passport/identity card no.,
            date of birth and nationality etc. or corporate details to the law
            enforcement authorities in Hong Kong, China and/or other similar
            governmental authorities upon their lawful request.
          </p>

          <h3 className="terms-subtitle">5. Cookies & Trackers </h3>

          <p className="terms-description">
            A cookie is a small text file which is placed onto your computer (or
            other device) when you access our website.
          </p>

          <p className="terms-description">How do we use cookies?</p>

          <p className="terms-description">
            We use cookies to improve your experience of our website and ensure
            it functions correctly.
          </p>

          <p className="terms-description">
            This includes, but is not limited to:
          </p>

          <p className="terms-description">
            <b>-</b> Keeping you signed in
          </p>

          <p className="terms-description">
            <b>-</b> Understanding how you use our site so we can improve the
            services, functionality and content
          </p>

          <p className="terms-description">
            <b>-</b> Providing more effective and relevant advertising based on
            your interests
          </p>

          <p className="terms-description">
            <b>-</b> Remembering items you have looked at
          </p>

          <p className="terms-description">
            The information we obtain from our use of cookies does not contain
            personal data eg name, date of birth. We may collect information
            such as your IP address, browser and/or other internet log
            information, but this will not usually identify you personally.
          </p>

          <p className="terms-description">
            Web browsers allow you to erase existing cookies from your hard
            drive, block the use of cookies and/or be notified when cookies are
            encountered. If you elect to block cookies, please note that you may
            not be able to take full advantage of the features and functions of
            our online platforms and/or apps.
          </p>

          <p className="terms-description">
            We use www.mailchimp.com as an email delivery and marketing company
            to send emails and newsletters that you have subscribed to or agreed
            to receive. Pixels, tags and cookies are used in those messages and
            at our Site to help us measure the effectiveness of our advertising
            and how visitors use our web site and read our messages.
          </p>

          <p className="terms-description">
            In case you would like to receive more information about this
            practice and to know your choices about not having this information
            used by this company, please refer to the cookie policy of the
            respective company directly.
          </p>

          <h3 className="terms-subtitle">6. Hyperlinks & External Websites </h3>

          <p className="terms-description">
            Our website contains links to the websites of third parties. As the
            content of these websites is not under our control, we cannot assume
            any liability for such external content. In all cases, the provider
            of information of the linked websites is liable for the content and
            accuracy of the information provided.
          </p>

          <p className="terms-description">
            At the point in time when the links were placed, no infringements of
            the law were recognizable to us. As soon as an infringement of the
            law becomes known to us, we will immediately remove the link in
            question.
          </p>

          <h3 className="terms-subtitle">7. Updates & Changes </h3>

          <p className="terms-description">
            We may update this Privacy Policy from time to time. Once we do so,
            the updates will be posted in the news section of our website and/or
            our social media accounts.
          </p>

          <p className="terms-description">
            In case of any questions please do not hesitate to get in touch with
            us. Please dial +852 4610 489 - 0 Extension: 165 or send us a
            message to privacy@victorum-group.com
          </p>

          <h3 className="terms-subtitle">8. Data Transfers & Storage </h3>

          <p className="terms-description">
            We will generally hold your data on our servers hosted in Hong Kong.
            However, we may transfer it to our overseas offices elsewhere in the
            world for the purpose of processing your personal, company and
            product details into our database and to forward them to potential
            customers of your products and services.
          </p>

          <p className="terms-description">
            In case you and/or your company are located in the European Economic
            Area (“EEA”) your personal data may be transferred to countries
            located outside the EEA which do not provide a similar or adequate
            level of protection to that provided by countries in the EEA.
          </p>

          <p className="terms-description">
            Such data transfers will only be made in accordance with applicable
            laws including where necessary for us to comply with our contractual
            obligations with you.
          </p>

          <p className="terms-description">
            We will take all steps reasonably necessary to ensure that any
            personal data are treated securely and in accordance with this
            Policy.
          </p>

          <h3 className="terms-subtitle">9. Rights & Restrictions </h3>

          <p className="terms-description">
            Visiting our Site and/or using our research and introduction
            services, transmitting a buy or sell request or making an
            application on our digital platforms, you acknowledge the collection
            and use of your personal data by us as outlined in this Policy.
          </p>

          <p className="terms-description">
            In case you do not agree with the use of your personal data as set
            out in this Policy, or other information, such as Terms and
            Conditions or Terms of Use, please leave our websites and do not use
            our apps or other digital platforms or services.
          </p>

          <p className="terms-description">
            Under the Hong Kong Personal Data (Privacy) Ordinance, you have the
            right:
          </p>

          <p className="terms-description">
            <b>a.</b> to check whether we hold personal data about you and to
            access such data
          </p>

          <p className="terms-description">
            <b>b.</b> to require us to correct inaccurate data
          </p>

          <p className="terms-description">
            <b>c.</b> to ascertain our policies and practices in relation to
            personal data and the kind of personal data held by us.
          </p>

          <p className="terms-description">
            <b>d.</b> in case you or your company are based in an EU Member
            State, subject to certain limitations and/or restrictions, you have
            the right under the data protection laws in the EU:
          </p>

          <p className="terms-description">
            <b>-</b> to request access to and rectification or erasure of your
            personal data;
          </p>

          <p className="terms-description">
            <b>-</b>to obtain restriction of processing or to object to
            processing of your personal data;
          </p>

          <p className="terms-description">
            <b>-</b>to the right to data portability.
          </p>

          <p className="terms-description">
            Individuals located in the EU additionally have the right to lodge a
            complaint about the processing of their personal data with their
            local data protection authority.
          </p>

          <h3 className="terms-subtitle">10. Contact Details & Directions </h3>

          <p className="terms-description">
            We are there for you in case of any questions related to privacy or
            data storage. If you wish to exercise one of the above mentioned
            rights, cease marketing communications, and/or raise questions or
            complaints, please feel free to contact us at any time.
          </p>

          <h3 className="terms-subtitle">General Contact Details:</h3>

          <p className="terms-description">Victorum Holding Ltd.</p>

          <p className="terms-description">
            8 Hennessy Road, 14F -China Hong Kong Tower
          </p>

          <p className="terms-description">Wan Chai, Hong Kong</p>

          <p className="terms-description">CEO: Martin Uhlemann </p>
          <p className="terms-description">
            Registered in Hong Kong under CR No.3061224{" "}
          </p>

          <p className="terms-description">Email: info@victorum-group.com</p>

          <h3 className="terms-subtitle">Data Privacy Department:</h3>

          <p className="terms-description">Victorum Holding Ltd.</p>

          <p className="terms-description">
            8 Hennessy Road, 14F -China Hong Kong Tower
          </p>

          <p className="terms-description">Wan Chai, Hong Kong</p>

          <p className="terms-description">
            Registered in Hong Kong under CR No.3061224{" "}
          </p>

          <p className="terms-description">
            Phone: +852 4610 489 - 0 Extension: 165{" "}
          </p>

          <p className="terms-description">Email: privacy@victorum-group.com</p>
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
