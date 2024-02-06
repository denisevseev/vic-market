"use client";
import Link from "next/link";
import "./navigation.scss";
import Image from "next/image";
import { Button, InputAdornment, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SelectCity from "../shared/select-city/select-city";
import NavigationPopover from "../navigation-popover/navigation-popover";
import { useState } from "react";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div id="wrapper">
      <div className="block left">
        <Image
          src="/logo.png"
          className="ml-left-logo"
          alt="Logo"
          width={181}
          height={41}
        />
      </div>
      <div className="block center">
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
