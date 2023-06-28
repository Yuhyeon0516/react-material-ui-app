import "./App.css";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

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
    </div>
  );
}

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
