import { Fab } from "@mui/material";
import React from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
import Link from "next/link";

function PrivacyPolicy() {
  return (
    <div>
      <h1>Privacy policy</h1>
      <Link href="/">
        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Go to home page
        </Fab>
      </Link>
    </div>
  );
}

export default PrivacyPolicy;
