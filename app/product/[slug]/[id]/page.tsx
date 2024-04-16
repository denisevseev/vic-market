"use client";
import {
  Box,
  Breadcrumbs,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import "../../../../styles/SingleProduct.scss";
import React, { useEffect, useState } from "react";
import {
  getFilteredProductsByCategory,
  getProductByID,
  getProductBySlug,
  processApiResponse,
} from "@/api/helper/dataFilter";
import { useMarketData } from "@/app/hooks/useMarketData";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import Default from "../../../../public/get-distributers.svg";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendIcon from "@mui/icons-material/Send";
import InquiryModal from "@/app/components/FeaturedProducts/InquiryModal/InquiryModal";
import { SellerDetails } from "@/app/components/SellerDetails/SellerDetails";
import FeaturedProducts from "@/app/components/FeaturedProducts/FeaturedProducts";
import CircularProgress from "@mui/material/CircularProgress";
import HeadData from "@/app/components/head";
import CustomHeadData from "@/app/components/customHead";

export default function Product({ params }: any) {
  const { data: marketData, isLoading } = useMarketData();
  const [productName, setProductName] = useState<any>(null);
  const [singleProduct, setSingleProduct] = useState<any | null>([]);

  const slug = params && params.slug ? params.slug : null;

  const [relatedProducts, setRelatedProducts] = useState<any>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<any[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // related
  const [categoryName, setCategoryName] = useState<any>(null);

  const [categorySlug, setCategorySlug] = useState<any>(null);

  const excludeProductById = (products: any[], excludedId: number) => {
    return products.filter((product) => product.id !== excludedId);
  };

  useEffect(() => {
    if (marketData) {
      const formated = processApiResponse(marketData);
      const product = getProductBySlug(formated, slug);

      if (product && product.productName) {
        setProductName(product.productName);
      }

      setSingleProduct(product ? [product] : []);
      const generatedBreadcrumbs = [
        { label: "Victorum trade", href: "/" },
        {
          label: `${product?.categoryName}`,
          href: `/category/[slug]`,
          as: `/category/${product?.categorySlug}`,
        },
        {
          label: productName,
          href: `/product/[slug]/[id]`,
          as: `/product/${slug}/${product.id}`,
        },
      ];

      setBreadcrumbs(generatedBreadcrumbs);
      if (formated) {
        const category: any = formated.find(
          (cat: any) => cat.categorySlug === slug
        );

        if (category && category.categoryName) {
          setCategoryName(category.categoryName);
        }
      }

      setCategorySlug(product?.categorySlug);

      if (formated && product && categorySlug) {
        let products = getFilteredProductsByCategory(
          formated,
          4,
          [],
          categorySlug
        );
        products = excludeProductById(products, product.id);
        setRelatedProducts(products);
      }
    }
  }, [marketData, slug, productName]);

  // fetchprod start
  useEffect(() => {
    const fetchProduct = async (id: any) => {
      try {
        const response = await fetch(`/api/market/product/${id}`);
        if (response.ok) {
          const productData = await response.json();
          setSingleProduct([productData]);
        } else {
          console.error("Failed to fetch product data");
        }
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    };
    fetchProduct(params.id);
  }, [params.id]);
  // fetchprod end

  const sellerInfo = {
    name: "nanda fluorine corporation",
    gst: "24ATGPM8483N1ZY",
    rating: 4,
    proprietor: "Mr Chandra Dhar Nanda",
    memberSince: 3,
    address:
      "Plot no 407/13, Near Fire Station, GIDC Panoli, Dist. Bharuch, Ankleshwar, Gujarat, 394115, India",
  };
  const imageMime =
    singleProduct[0] && singleProduct[0].files && singleProduct[0].files.length > 0
      ? singleProduct[0].files[0].link.split(".").pop()
      : null;

  return (
    <main>
      <CustomHeadData
        title={singleProduct[0]?.productName ?? "Product"}
        description={singleProduct[0]?.description ?? "Product description"}
        keywords={singleProduct[0]?.productName}
        price={singleProduct[0]?.productPrice + " " + singleProduct[0]?.currency}
        image={
          singleProduct[0] &&
          singleProduct[0].files &&
          singleProduct[0].files[0] &&
          singleProduct[0].files[0].link
        }
        imageMime={imageMime}
        id={singleProduct[0]?.id}
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
          {isLoading ? (
            <Box className="loaderBox">
              <CircularProgress sx={{ color: "rgb(38, 92, 129)" }} />
            </Box>
          ) : (
            <Box
              className="other-page-wrap-start"
              style={{ marginBottom: "6rem" }}
            >
              <Box>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs?.map((breadcrumb, index) => (
                    <Link
                      className="breadCrumb"
                      key={"BreadCrumb" + index}
                      href={breadcrumb.href}
                      as={breadcrumb.as || undefined}
                      passHref
                    >
                      <Typography>{breadcrumb.label}</Typography>
                    </Link>
                  ))}
                </Breadcrumbs>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                {singleProduct && singleProduct.length > 0 && (
                  <>
                    <Box
                      key={"Single product" + singleProduct[0]?.id}
                      className="productInfoMainSellerDetailsMain"
                    >
                      <Box className="productInfoMainBox">
                        <Box className="productImagesContainer">
                          <Image
                            src={
                              (singleProduct[0] &&
                                singleProduct[0].files &&
                                singleProduct[0].files[0] &&
                                singleProduct[0].files[0].link) ||
                              Default
                            }
                            width={100}
                            height={100}
                            alt="Product Image"
                            className="imageSingleProduct"
                            priority
                          />
                        </Box>
                        <Box className="singleProductInfo">
                          <Box className="shareIconBox">
                            <IconButton>
                              <ShareOutlinedIcon className="shareIcon" />
                            </IconButton>
                          </Box>
                          <Box className="productTitleBox">
                            <Typography className="productTitle">
                              {singleProduct[0]?.productName}
                            </Typography>
                          </Box>
                          <Divider sx={{ color: "rgb(238, 240, 243);" }} />
                          <Box className="productPriceBox">
                            {" "}
                            <Typography className="productPrice">
                              Price: {singleProduct[0]?.productPrice}
                              {singleProduct[0]?.currency}
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
                                  Victorum {singleProduct[0]?.countryName}
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
                            {singleProduct[0]?.incoterms && (
                              <Box>
                                <Box className="subInfoBox">
                                  <Typography className="subInfoHead">
                                    Income Terms:{" "}
                                  </Typography>
                                  <Typography className="subInfo">
                                    {singleProduct[0]?.incoterms}
                                  </Typography>
                                </Box>
                              </Box>
                            )}
                            {singleProduct[0]?.minimal_quantity && (
                              <Box>
                                <Box className="subInfoBox">
                                  <Typography className="subInfoHead">
                                    Minimal Parity:
                                  </Typography>
                                  <Typography className="subInfo">
                                    {singleProduct[0].minimal_quantity}
                                  </Typography>
                                </Box>
                              </Box>
                            )}
                            <Box>
                              {" "}
                              <button
                                className="inquiryButtonSingleProduct"
                                onClick={handleOpenModal}
                              >
                                <p>Send Inquiry</p>
                                <SendIcon />
                              </button>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="sellerDetailsMain">
                        <SellerDetails
                          name={sellerInfo.name}
                          gst={sellerInfo.gst}
                          rating={sellerInfo.rating}
                          proprietor={singleProduct[0]?.createdBy}
                          memberSince={sellerInfo.memberSince}
                          address={singleProduct[0]?.Address}
                          country={singleProduct[0]?.countryName}
                          tnvedCode={singleProduct[0]?.tnvedCode}
                        />
                      </Box>
                    </Box>
                    {singleProduct[0].description && (
                      <Box className="productDescMainBox">
                        <Box>
                          <Typography className="productDescHeadText">
                            Product Description
                          </Typography>
                        </Box>
                        <Box>
                          <Typography className="productDescText">
                            {singleProduct[0]?.description}
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
                        address={singleProduct[0]?.Address}
                        country={singleProduct[0]?.countryName}
                        tnvedCode={singleProduct[0]?.tnvedCode}
                      />
                    </Box>
                    <InquiryModal
                      isOpen={isModalOpen}
                      onClose={handleCloseModal}
                      productName={singleProduct[0]?.productName}
                      company={singleProduct[0]?.manufacturerName}
                      imgSrc={
                        (singleProduct[0] &&
                          singleProduct[0].files &&
                          singleProduct[0].files[0] &&
                          singleProduct[0].files[0].link) ??
                        "/get-distributers.svg"
                      }
                      id={singleProduct[0]?.id}
                    />
                  </>
                )}
                {relatedProducts && relatedProducts.length > 0 && (
                  <FeaturedProducts
                    backAction={false}
                    title={"Related Products"}
                    data={relatedProducts}
                  />
                )}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </main>
  );
}
