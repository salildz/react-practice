import { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#b7957d",
    },
    secondary: {
      main: "#ece0d1",
    },
    info: {
      main: "#6f5443",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
