/* eslint-disable @next/next/no-img-element */
"use client";
import "./Navigation.scss";
import Image from "next/image";
import {
  Autocomplete,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import NavigationPopover from "../NavigationPopover/NavigationPopover";
import Link from "next/link";
import React, { useEffect } from "react";
import { getRandomProducts, processApiResponse } from "@/api/helper/dataFilter";
import { useMarketData } from "@/app/hooks/useMarketData";
import { useRouter } from "next/navigation";

type Product = {
  productName: string;
  categoryName: string;
  productImage: string;
  productSlug: string;
  id: number;
};

const Navigation = () => {
  const { data: marketData, isLoading } = useMarketData();
  const [anchorEl, setAnchorEl] = useState(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [navClass, setNavClass] = React.useState("");

  const router = useRouter();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleInputChange = (event: any, value: any) => {
    setInputValue(value);
  };

  useEffect(() => {
    if (marketData) {
      const formated = processApiResponse(marketData);
      setProducts(getRandomProducts(formated, 100));
    }
  }, [marketData]);

  // scroll start
  const SCROLL_THRESHOLD_ADD = 70;
  const SCROLL_THRESHOLD_REMOVE = 10;
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window && typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (
          currentScrollY >= SCROLL_THRESHOLD_ADD &&
          lastScrollY < SCROLL_THRESHOLD_ADD
        ) {
          setNavClass("smaller-nav");
        } else if (
          currentScrollY <= SCROLL_THRESHOLD_REMOVE &&
          lastScrollY > SCROLL_THRESHOLD_REMOVE
        ) {
          setNavClass("");
        }

        lastScrollY = currentScrollY;
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  // scroll end

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div id="wrapper" className={`${navClass}`}>
      <div className="block left">
        <Link href="/">
          <Image
            src="/logoTrade2.png"
            className="ml-left-logo"
            alt="Logo"
            width={181}
            height={51}
            style={{ objectFit: "cover" }}
            priority
          />
        </Link>
      </div>
      <div className="block center medium-hide">
        {/* <div className="select-city-container">
          <SelectCity />
        </div> */}

        <Autocomplete
          options={products}
          getOptionLabel={(option) => `${option.productName}`}
          renderOption={(props, option: Product) => (
            // <Link
            //   className="productLinkSearch"
            //   key={option.id}
            //   href={`/product/${option.productSlug}/${option.id}`}
            // >
            <Box
              key={option.id}
              className="autocompleteSingleOptionBox"
              onClick={() =>
                router.push(`/product/${option.productSlug}/${option.id}`)
              }
            >
              <img
                src={option.productImage ?? "/get-distributers.svg"}
                alt={`Image for ${option.productName}`}
                style={{
                  objectFit: "cover",
                  minHeight: "45px",
                  maxHeight: "45px",
                  minWidth: "45px",
                  maxWidth: "45px",
                }}
              />
              <Typography>{option.productName}</Typography>
            </Box>
            // </Link>
          )}
          sx={{
            width: { xs: "90%", md: "60%" },
            marginRight: 2,
            "& .MuiOutlinedInput-root": {
              paddingRight: "15px !important",
              borderRadius: "8px",
              "& .MuiInputBase-input::placeholder": {
                fontSize: { xs: "10px", sm: "12px" },
                lineHeight: { xs: "1.25", sm: "1.5" },
              },
            },
          }}
          className="searchProductTextField"
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Search for a product"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end" sx={{ borderRadius: "8px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <SearchIcon style={{ color: "black" }} />
                    </div>
                  </InputAdornment>
                ),
              }}
            />
          )}
          onInputChange={handleInputChange}
        />

        {/* <div className="registered-users-container">
          <div className="reg-users-box">
            <p className="registered-users-text black-text">Registered Users</p>
          </div>
          <div className="number-of-users-box">
            <p className="registered-users-text blue-text">1,07,64,614</p>
          </div>
        </div> */}
      </div>
      <div className="block right">
        {/* <p className="login-text">Login</p> */}
        {/* <Button
          variant="contained"
          style={{ backgroundColor: "#2A5182" }}
          className="sign-up"
        >
          Sign Up
        </Button> */}
        <MenuIcon
          className="mr-right-icon"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
        <NavigationPopover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        />
      </div>
    </div>
  );
};

export default Navigation;
