import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 950,
      lg: 1250,
      xl: 1500,
    },
  },
});
