import "./App.css";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

function App() {
  return (
    <div>
      <Button size="large" variant="text">
        Hello world
      </Button>
      <Button fullWidth={true} variant="contained">
        Hello world
      </Button>
      <Button variant="outlined">Hello world</Button>
      <br />
      <Button startIcon={<AcUnitIcon />} variant="outlined">
        Hello
      </Button>
      <Button endIcon={<AccessibilityIcon />} variant="outlined">
        Hello
      </Button>
      <br />
      <Button
        sx={{
          backgroundColor: "gray",
          color: "white",
          margin: 10,
          "&:hover": {
            backgroundColor: "black",
          },
          "&:disabled": {
            backgroundColor: "white",
            color: "black",
          },
        }}
        variant="contained"
      >
        Custom
      </Button>
      <CustomeButton>Custom2</CustomeButton>
      <br />
      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>

      <Button color="secondary">Theme Button</Button>
      <CustomThemeButton>Custeom Theme Button</CustomThemeButton>
      <Root>
        <Typography>down(md): red</Typography>
        <Typography>up(md): blue</Typography>
        <Typography>up(lg): green</Typography>
      </Root>
    </div>
  );
}

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500],
  },
}));

const CustomThemeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  margin: 10,
  "&:hover": {
    backgroundColor: "orange",
  },
  "&:disabled": {
    backgroundColor: "white",
    color: "black",
  },
}));

const CustomeButton = styled(Button)({
  backgroundColor: "red",
  color: "white",
  margin: 10,
  "&:hover": {
    backgroundColor: "orange",
  },
  "&:disabled": {
    backgroundColor: "white",
    color: "black",
  },
});

export default App;
