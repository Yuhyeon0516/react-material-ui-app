import { Box } from "@mui/material";
import React from "react";

const LeftBody = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" }, backgroundColor: "primary.main" }}>
      LeftBodyy
    </Box>
  );
};

export default LeftBody;
