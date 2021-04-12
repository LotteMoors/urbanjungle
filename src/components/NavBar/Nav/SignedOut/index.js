import React from "react";
import { Link } from "react-router-dom";

import { HoverBox, Box } from "../styles.js";

export const SignedOutLink = () => {
  return (
   
        <Box>
          <Link to="/Login">
            <HoverBox className="link-out">Sign In</HoverBox>
          </Link>
        </Box>        
    
  );
};
