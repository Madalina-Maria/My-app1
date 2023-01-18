import BottomNavigation from "@mui/material/BottomNavigation";
import React from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import BugReportIcon from "@mui/icons-material/BugReport";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#59D7EE",
    },
    secondary: {
      main: "#D3B5E5",
    },
  },
});

export default function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 700,
          backgroundColor: "primary",
        }}
      >
        <BottomNavigation sx={{ bgcolor: "primary.main" }} showLabels>
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Home"
            value="Home"
            icon={<HomeIcon />}
          />

          <BottomNavigationAction
            component={Link}
            to="/register"
            label="Register"
            value="Register"
            icon={<ArticleIcon />}
          />

          <BottomNavigationAction
            component={Link}
            to="/login"
            label="Login"
            value="Login"
            icon={<BugReportIcon />}
          />

          <BottomNavigationAction
            component={Link}
            to="/vizualizare"
            label="vizualizare"
            value="vizualizare"
            icon={<BugReportIcon />}
          />

          <BottomNavigationAction
            component={Link}
            to="/ajutor"
            label="Ajutor"
            value="Ajutor"
            icon={<BugReportIcon />}
          />
        </BottomNavigation>
      </Box>
      <Box sx={{ width: 700, backgroundColor: "primary.main" }}></Box>
    </ThemeProvider>
  );
}
