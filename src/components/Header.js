import styled from "@emotion/styled";
import { AcUnit, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadiusSm,
    width: "40%",
  }));

  const Icons = styled("div")(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI
        </Typography>
        <AcUnit sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ bgcolor: "gray" }}>N</Avatar>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
