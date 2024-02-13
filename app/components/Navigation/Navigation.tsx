"use client";
import "./Navigation.scss";
import Image from "next/image";
import { Button, InputAdornment, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SelectCity from "../shared/SelectCity/SelectCity";
import { useState } from "react";
import NavigationPopover from "../NavigationPopover/NavigationPopover";
import Link from "next/link";
import React, {useEffect} from "react";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // scroll start
  const [navClass, setNavClass] = React.useState("");

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
  }, [])
  
  // scroll end

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div id="wrapper" className={`${navClass}`}>
      <div className="block left">
        <Link href="/">
          <Image
            src="/logo.png"
            className="ml-left-logo"
            alt="Logo"
            width={181}
            height={41}
            priority
          />
        </Link>
      </div>
      <div className="block center medium-hide">
        <div className="select-city-container">
          <SelectCity />
        </div>
        <TextField
          sx={{
            width: { xs: "90%", md: "60%" },
            marginRight: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              "& .MuiInputBase-input::placeholder": {
                fontSize: { xs: "10px", sm: "12px" },
                lineHeight: { xs: "1.25", sm: "1.5" },
              },
            },
          }}
          className="searchProductTextField"
          variant="outlined"
          placeholder="Search for a product, category or service"
          InputProps={{
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
        <div className="registered-users-container">
          <div className="reg-users-box">
            <p className="registered-users-text black-text">Registered Users</p>
          </div>
          <div className="number-of-users-box">
            <p className="registered-users-text blue-text">1,07,64,614</p>
          </div>
        </div>
      </div>
      <div className="block right">
        <p className="login-text">Login</p>
        <Button
          variant="contained"
          style={{ backgroundColor: "#2A5182" }}
          className="sign-up"
        >
          Sign Up
        </Button>
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
