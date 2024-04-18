import "../../../../styles/SingleProduct.scss";
import React from "react";
import CustomHeadData from "@/app/components/customHead";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { SellerDetails } from "@/app/components/SellerDetails/SellerDetails";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Default from "../../../../public/get-distributers.svg";
import RelatedProducts from "@/app/components/SingleProduct/RelatedProducts";
import ProductsBreadCrumbs from "@/app/components/SingleProduct/ProductBreadCrumbs";
import ProductSendInquiry from "@/app/components/SingleProduct/ProductSendInquiry";
import Image from "next/image";

async function getSingleProduct(id: any) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_FRONT_LINK + `/api/market/product/${id}`,
      { method: "GET" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function Product({ params }: any) {
  const slug = params && params.slug ? params.slug : null;
  const id = params && params.id ? params.id : null;

  const singleProduct = await getSingleProduct(id);

  const getProductSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const sellerInfo = {
    name: "nanda fluorine corporation",
    gst: "24ATGPM8483N1ZY",
    rating: 4,
    proprietor: "Mr Chandra Dhar Nanda",
    memberSince: 3,
    address:
      "Plot no 407/13, Near Fire Station, GIDC Panoli, Dist. Bharuch, Ankleshwar, Gujarat, 394115, India",
  };

  const productSlug = getProductSlug(singleProduct?.productName || "");

  const imageMime =
    singleProduct && singleProduct.files && singleProduct.files.length > 0
      ? singleProduct.files[0].link.split(".").pop()
      : null;

  return (
    <main>
      <CustomHeadData
        title={singleProduct?.productName ?? "Product"}
        productSlug={productSlug ?? "Product slug"}
        description={singleProduct?.description ?? "Product description"}
        keywords={singleProduct?.productName}
        price={singleProduct?.productPrice + " " + singleProduct?.currency}
        image={
          singleProduct &&
          singleProduct.files &&
          singleProduct.files[0] &&
          singleProduct.files[0].link
        }
        imageMime={imageMime}
        id={singleProduct?.id}
      />
      <Box className="container">
        <Box
          style={{
            width: "98%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "4rem",
          }}
        >
          <Box
            className="other-page-wrap-start"
            style={{ marginBottom: "6rem" }}
          >
            {/* BREADCRUMBS */}
            <ProductsBreadCrumbs slug={slug} singleProduct={singleProduct} />
            <Box sx={{ marginTop: "20px" }}>
              {singleProduct && (
                <>
                  <Box
                    key={"Single product" + singleProduct?.id}
                    className="productInfoMainSellerDetailsMain"
                  >
                    <Box className="productInfoMainBox">
                      <Box className="productImagesContainer">
                        {singleProduct &&
                        singleProduct.files &&
                        singleProduct.files[0] &&
                        singleProduct.files[0].link &&
                        /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(
                          singleProduct.files[0].link
                        ) ? (
                          <Image
                            src={
                              singleProduct &&
                              singleProduct.files &&
                              singleProduct.files &&
                              singleProduct.files[0].link
                            }
                            width={100}
                            height={100}
                            alt="Product Image"
                            className="imageSingleProduct"
                            priority
                          />
                        ) : (
                          <Box className="imageSingleProduct noImageSingleProduct"></Box>
                        )}
                      </Box>
                      <Box className="singleProductInfo">
                        <Box className="shareIconBox">
                          <IconButton>
                            <ShareOutlinedIcon className="shareIcon" />
                          </IconButton>
                        </Box>
                        <Box className="productTitleBox">
                          <Typography className="productTitle">
                            {singleProduct?.productName}
                          </Typography>
                        </Box>
                        <Divider sx={{ color: "rgb(238, 240, 243);" }} />
                        <Box className="productPriceBox">
                          {" "}
                          <Typography className="productPrice">
                            Price: {singleProduct?.productPrice}{" "}
                            {singleProduct?.currency}
                          </Typography>
                        </Box>
                        <Divider sx={{ color: "rgb(238, 240, 243);" }} />
                        <Box className="subProductInfoColumn">
                          <Box>
                            <Box className="subInfoBox">
                              <Typography className="subInfoHead">
                                Seller detail:{" "}
                              </Typography>
                              <Typography className="subInfo">
                                {/* {product.manufacturerName}{" "} */}
                                Victorum {singleProduct?.countryName}
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Box className="subInfoBox">
                              <Typography className="subInfoHead">
                                Delivery Time:{" "}
                              </Typography>
                              <Typography className="subInfo">
                                1 - 90 days
                              </Typography>
                            </Box>
                          </Box>
                          {singleProduct?.incoterms && (
                            <Box>
                              <Box className="subInfoBox">
                                <Typography className="subInfoHead">
                                  Income Terms:{" "}
                                </Typography>
                                <Typography className="subInfo">
                                  {singleProduct?.incoterms}
                                </Typography>
                              </Box>
                            </Box>
                          )}
                          {singleProduct?.minimal_quantity && (
                            <Box>
                              <Box className="subInfoBox">
                                <Typography className="subInfoHead">
                                  Minimal Parity:
                                </Typography>
                                <Typography className="subInfo">
                                  {singleProduct.minimal_quantity}
                                </Typography>
                              </Box>
                            </Box>
                          )}

                          {/* SEND INQUIRY */}
                          <ProductSendInquiry singleProduct={singleProduct} />
                        </Box>
                      </Box>
                    </Box>
                    <Box className="sellerDetailsMain">
                      <SellerDetails
                        name={sellerInfo.name}
                        gst={sellerInfo.gst}
                        rating={sellerInfo.rating}
                        proprietor={singleProduct?.createdBy}
                        memberSince={sellerInfo.memberSince}
                        address={singleProduct?.Address}
                        country={singleProduct?.countryName}
                        tnvedCode={singleProduct?.tnvedCode}
                      />
                    </Box>
                  </Box>
                  {singleProduct.description && (
                    <Box className="productDescMainBox">
                      <Box>
                        <Typography className="productDescHeadText">
                          Product Description
                        </Typography>
                      </Box>
                      <Box>
                        <Typography className="productDescText">
                          {singleProduct?.description}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                  <Box className="sellerDetailsMainMob">
                    <SellerDetails
                      name={sellerInfo.name}
                      gst={sellerInfo.gst}
                      rating={sellerInfo.rating}
                      proprietor={sellerInfo.proprietor}
                      memberSince={sellerInfo.memberSince}
                      address={singleProduct?.Address}
                      country={singleProduct?.countryName}
                      tnvedCode={singleProduct?.tnvedCode}
                    />
                  </Box>
                </>
              )}

              {/* RELATED PRODUCTS */}
              <RelatedProducts slug={slug} singleProduct={singleProduct} />
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
