import React from "react";
import { Link } from "react-router-dom";

import { HoverBox, Box } from "../styles.js";

export const SignedOutLink = () => {
  return (
   
        <Box>
          <Link className="link" to="/Login">
            <HoverBox>Sign In</HoverBox>
          </Link>
        </Box>
        
     
    
  );
};
