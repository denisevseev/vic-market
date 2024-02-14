import React from "react";
import "./style.scss";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CategoryRank from "../../public/category-rank.svg";
import ProductCategory from "../../public/product-category.svg";
import RegUsers from "../../public/reg-users.svg";
import InquiriesEveryYear from "../../public/inquiries-every-year.svg";
import AboutUsBuildingImage from "../../public/about-us-buildings.jpg";
import OurCoreValue from "../../public/our-core-value1.jpg";
import OurCoreValue2 from "../../public/our-core-value2.jpg";
import OurCoreValue3 from "../../public/our-core-value3.jpg";
import OurCoreValue4 from "../../public/our-core-value4.jpg";
import OurCoreValue5 from "../../public/our-core-value5.jpg";
import ConnectImage from "../../public/connect-image.png";
import OurJourneySlider from "../components/AboutUsSliders/OurJourneySlider";
import AutoPlaySlider from "../components/AboutUsSliders/AutoPlaySlider";

export default function AboutUs() {
  const autoPlayImages = ["/testImage.png", "/testImage.png", "/testImage.png"];
  return (
    <main>
      <Box>
        {/* FIRST SECTION */}
        <Box className="aboutUsMainBox">
          <Box className="firstSectionAboutUs">
            <Box className="badgeAboutUs">
              <Typography className="badgeAboutUsText">
                #SabMilegaYahinMilega
              </Typography>
            </Box>
            <Box className="mainHeadingAboutUs">
              <Typography className="mainHeadingAboutUsText" color={"#13496c"}>
                Making Indian MSMEs
              </Typography>
              <Box className="digitallySakshamTextsBox">
                <Typography
                  className="mainHeadingAboutUsText"
                  color={"#E11B22"}
                >
                  Digitally
                </Typography>
                <Typography
                  color={"#FFC20E"}
                  className="mainHeadingAboutUsText"
                >
                  {" "}
                  Saksham
                </Typography>
              </Box>
            </Box>
            <Box className="mainHeadingContent">
              <Box className="mainHeadingContentText">
                We are one of
                <span className="mainHeadingContentTextBold">
                  {" "}
                  India’s largest and oldest B2B e-commerce platforms{" "}
                </span>
                that connects buyers and suppliers to create a customer-driven
                value chain for all businesses, including SMEs, large
                enterprises, and individuals.
              </Box>
            </Box>
            <Box className="mainHeadingContent">
              <Typography className="mainHeadingContentText">
                We integrate businesses into global value chains by bringing
                them together from across the world, on a single platform to
                interact and conduct the business smoothly, securely, and
                effectively.
              </Typography>
            </Box>
          </Box>
          {/* <Box className="autoplayMainBox">
            <AutoPlaySlider images={autoPlayImages} />
            <AutoPlaySlider images={autoPlayImages} />
            <AutoPlaySlider images={autoPlayImages} />
          </Box>
          <Box className="fadeImage"></Box> */}
        </Box>

        {/* SECOND SECTION */}
        <Box className="secondSectionMainAboutUs">
          <Box className="secondSectionBox">
            <Box className="secondSectionItem">
              <Box className="secondSectionSingleItemMain">
                <Box>
                  <Image
                    src={InquiriesEveryYear}
                    alt="Inquiries Every Year"
                    height={44}
                    width={47}
                  />
                </Box>
                <Box>
                  {" "}
                  <Typography className="secondSectionNumbers">
                    80 Million+
                  </Typography>
                </Box>
                <Box>
                  <Typography className="secondSectionIconTexts">
                    {" "}
                    Inquiries Every Year
                  </Typography>
                </Box>
              </Box>
              <Box className="secondSectionSingleItemMain">
                <Image
                  src={RegUsers}
                  alt="Registered Users"
                  height={44}
                  width={47}
                />{" "}
                <Typography className="secondSectionNumbers">
                  10.8 Million+
                </Typography>
                <Typography className="secondSectionIconTexts">
                  {" "}
                  Registered Users
                </Typography>
              </Box>
              <Box className="secondSectionSingleItemMain">
                <Image
                  src={ProductCategory}
                  alt="Product Categories"
                  height={44}
                  width={47}
                />{" "}
                <Typography className="secondSectionNumbers">
                  90,000+
                </Typography>
                <Typography className="secondSectionIconTexts">
                  {" "}
                  Product Categories
                </Typography>
              </Box>
              <Box className="secondSectionSingleItemMain">
                <Image
                  src={CategoryRank}
                  alt="Category Rank"
                  height={44}
                  width={47}
                />{" "}
                <Typography className="secondSectionNumbers">20</Typography>
                <Typography className="secondSectionIconTexts">
                  {" "}
                  Category Rank
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* THIRD SECTION */}
        <Box className="aboutUsThirdSectionMain">
          <Box className="ourMissionBoxMain">
            <Image
              alt="About Us Building Image"
              src={AboutUsBuildingImage}
              height={353}
              style={{ width: "100%" }}
              width={556}
              layout="responsive"
            />
          </Box>
          <Box className="ourMissionBoxMain">
            <Typography className="ourMissionAndVisionText">
              Our Mission and Vision
            </Typography>
            <Typography className="letsEnableSMEsText">
              Let’s enable 63 million+ SMEs to go digital
            </Typography>
            <Typography className="ourMissionAndVisionDesc">
              With technology and innovation as enablers, we endeavour to help
              our users reinvent businesses to compete and win, with
              digitization at the core. We also pride ourselves to be the only
              marketplace offering 360° digital marketing solutions to MSMEs to
              help them be tech-enabled.
            </Typography>
            <Typography className="ourMissionAndVisionDesc">
              With a robust pan- India as well as a global presence in 10+
              countries, we also assist global buyers to locate Indian
              suppliers, manufacturers, and exporters.
            </Typography>
          </Box>
        </Box>
        {/* FOURTH SECTION */}
        <Box className="fourthSectionMain">
          <Box className="fourthSectionSec">
            <Box className="fourthSectionContent">
              <Typography className="meetOurForceText">
                Meet Our Force
              </Typography>
              <Box className="leadersItems">
                <Box className="leadersItem">
                  <Box className="leadersImage"></Box>
                  <Typography className="leadersName">Bikky Khosla</Typography>
                  <Typography className="leadersPosition">
                    Founder & Chairman
                  </Typography>
                  <Typography className="leadersDesc">
                    Bikky Khosla is a first-generation entrepreneur who has
                    revolutionised the dot-com industry with a vision to serve
                    India’s trade community in 1990, which is TI today. He also
                    serves as the chairman of ASSOCHAM&apos;s e-commerce
                    committee. He is also the editor of SME Times and is
                    well-versed in how investors should invest in early-stage
                    companies.
                  </Typography>
                </Box>
                <Box className="leadersItem">
                  <Box className="leadersImage2"></Box>
                  <Typography className="leadersName">Bikky Khosla</Typography>
                  <Typography className="leadersPosition">
                    Founder & Chairman
                  </Typography>
                  <Typography className="leadersDesc">
                    Bikky Khosla is a first-generation entrepreneur who has
                    revolutionised the dot-com industry with a vision to serve
                    India’s trade community in 1990, which is TI today. He also
                    serves as the chairman of ASSOCHAM&apos;s e-commerce
                    committee. He is also the editor of SME Times and is
                    well-versed in how investors should invest in early-stage
                    companies.
                  </Typography>
                </Box>
                <Box className="leadersItem">
                  <Box className="leadersImage3"></Box>
                  <Typography className="leadersName">Bikky Khosla</Typography>
                  <Typography className="leadersPosition">
                    Founder & Chairman
                  </Typography>
                  <Typography className="leadersDesc">
                    Bikky Khosla is a first-generation entrepreneur who has
                    revolutionised the dot-com industry with a vision to serve
                    India’s trade community in 1990, which is TI today. He also
                    serves as the chairman of ASSOCHAM&apos;s e-commerce
                    committee. He is also the editor of SME Times and is
                    well-versed in how investors should invest in early-stage
                    companies.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* FIFTH SECTION */}
        <Box className="fifthSectionMain">
          <Box className="fifthSectionBox">
            <Box className="fifthSectionContent">
              <Typography className="meetOurForceText">
                Our Core Values
              </Typography>
              <Box className="ourCoreValueItems">
                <Box className="ourCoreValuesItemImage">
                  <Image
                    src={OurCoreValue}
                    width={509}
                    height={284}
                    layout="responsive"
                    style={{ height: "100%" }}
                    alt="Trust and Transparency"
                  />
                </Box>
                <Box className="ourCoreValuesItemContent">
                  <Typography className="ourCoreValueContentHeading">
                    Trust and Transparency
                  </Typography>
                  <Typography className="ourCoreValueContentDesc">
                    At the heart of our organization, trust and transparency
                    stand as unwavering core values. Trust is the foundation
                    upon which all our relationships, both internal and
                    external, are built. It&apos;s the bedrock of our commitment
                    to integrity and accountability, as we believe that trust is
                    not given but earned through consistent actions and open
                    communication.
                  </Typography>
                </Box>
              </Box>

              <Box className="ourCoreValueItems2">
                <Box className="ourCoreValuesItemImage">
                  <Image
                    src={OurCoreValue2}
                    width={509}
                    style={{ height: "100%" }}
                    layout="responsive"
                    height={284}
                    alt="Constant Learning"
                  />
                </Box>
                <Box className="ourCoreValuesItemContent">
                  <Typography className="ourCoreValueContentHeading">
                    Constant Learning
                  </Typography>
                  <Typography className="ourCoreValueContentDesc">
                    We understand that in a rapidly evolving world, stagnation
                    is not an option. We embrace the spirit of continuous
                    improvement, encouraging every member of our team to seek
                    knowledge, acquire new skills, and adapt to emerging trends
                    and technologies. We view challenges as opportunities for
                    growth and change as a chance to evolve and excel.
                  </Typography>
                </Box>
              </Box>

              <Box className="ourCoreValueItems">
                <Box className="ourCoreValuesItemImage">
                  <Image
                    src={OurCoreValue3}
                    style={{ height: "100%" }}
                    width={509}
                    layout="responsive"
                    height={284}
                    alt="Ownership"
                  />
                </Box>
                <Box className="ourCoreValuesItemContent">
                  <Typography className="ourCoreValueContentHeading">
                    Ownership
                  </Typography>
                  <Typography className="ourCoreValueContentDesc">
                    Taking ownership is a fundamental core value that defines
                    the essence of our organization. We believe that success is
                    a product of personal responsibility and accountability. We
                    encourage every member of our team to embrace challenges as
                    opportunities to take ownership of their work, decisions,
                    and outcomes.
                  </Typography>
                </Box>
              </Box>

              <Box className="ourCoreValueItems2">
                <Box className="ourCoreValuesItemImage">
                  <Image
                    src={OurCoreValue4}
                    style={{ height: "100%" }}
                    width={509}
                    layout="responsive"
                    height={284}
                    alt="Drive and Deliver"
                  />
                </Box>
                <Box className="ourCoreValuesItemContent">
                  <Typography className="ourCoreValueContentHeading">
                    Drive and Deliver
                  </Typography>
                  <Typography className="ourCoreValueContentDesc">
                    We believe that having the determination to push boundaries
                    and the dedication to turn ambitions into reality are vital
                    components of success. Every member of our team is driven by
                    a relentless pursuit of our goals, fueled by a passion for
                    innovation and a sense of purpose.
                  </Typography>
                </Box>
              </Box>

              <Box className="ourCoreValueItems">
                <Box className="ourCoreValuesItemImage">
                  <Image
                    src={OurCoreValue5}
                    style={{ height: "100%" }}
                    layout="responsive"
                    width={509}
                    height={284}
                    alt="One 'TI'"
                  />
                </Box>
                <Box className="ourCoreValuesItemContent">
                  <Typography className="ourCoreValueContentHeading">
                    One &apos;TI&apos;
                  </Typography>
                  <Typography className="ourCoreValueContentDesc">
                    A cohesive culture, uniting us under the banner of &quot;One
                    TI,&quot; is the heartbeat of our organization. We recognize
                    that our strength lies not just in individual talents but in
                    our collective spirit and shared values. We foster an
                    environment where every member feels a sense of belonging
                    and ownership, working collaboratively towards our common
                    mission.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* SIXTH SECTION */}
        <OurJourneySlider />
        {/* SEVENTH SECTION */}
        <Box className="seventhSectionMain">
          <Box className="seventhSectionBox">
            <Typography className="meetOurForceText">
              Voice of Change
            </Typography>
            <Box className="connectImage">
              <Image
                src={ConnectImage}
                alt="Connect Image"
                height={737}
                width={1159}
                layout="responsive"
              />
            </Box>
            <Box className="voiceOfChangeMobItemsBox">
              <Box className="voiceChangeMobItem">
                <Box className="voiceChangeMob"></Box>
                <Box>
                  <Typography className="voiceChangeMobText">
                    Seamless Process of deal booking, payment, Logistics and
                    other value-added services
                  </Typography>
                </Box>
              </Box>
              <Box className="voiceChangeMobItem">
                <Box className="voiceChangeMob2"></Box>
                <Box>
                  <Typography className="voiceChangeMobText">
                    Surged Demand
                  </Typography>
                </Box>
              </Box>
              <Box className="voiceChangeMobItem">
                <Box className="voiceChangeMob3"></Box>
                <Box>
                  <Typography className="voiceChangeMobText">
                    No Default Risk
                  </Typography>
                </Box>
              </Box>
              <Box className="voiceChangeMobItem">
                <Box className="voiceChangeMob4"></Box>
                <Box>
                  <Typography className="voiceChangeMobText">
                    Organized Marketplace
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
