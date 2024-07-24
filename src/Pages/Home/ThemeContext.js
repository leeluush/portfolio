import React, { createContext, useContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import lightBulbIcon from "../../assets/blubOn.png";
import darkBulbIcon from "../../assets/blubOff.png";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          background: {
            default: themeMode === "light" ? "#ffffff" : "#121212",
            paper: themeMode === "light" ? "#f5f5f5" : "#1e1e1e",
            container: themeMode === "light" ? "#ffffff" : "#121212", // Ensure container background is set
          },
          text: {
            primary: themeMode === "light" ? "#000000" : "#ffffff",
          },
        },
        typography: {
          allVariants: {
            color: themeMode === "light" ? "#000000" : "#ffffff",
          },
        },
        icons: {
          bulb: themeMode === "light" ? darkBulbIcon : lightBulbIcon,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
              body {
                background-color: ${themeMode === "light" ? "#ffffff" : "#121212"};
                color: ${themeMode === "light" ? "#000000" : "#ffffff"};
              }
              a {
                color: ${themeMode === "light" ? "#0000ff" : "#90caf9"};
              }
              .hero--section {
                background-color: ${themeMode === "light" ? "#ffffff" : "#121212"};
              }
              .hero--section .section-title,
              .hero--section .hero--section-description {
                color: ${themeMode === "light" ? "#000000" : "#ffffff"};
              }
              .main--container {
                background-color: ${themeMode === "light"? "#ffffff" : "#121212"};
                color: ${themeMode === "light"? "#000000" : "#ffffff"};
              }
              .contact--form--container {
                background-color: ${themeMode === "light" ? "#f5f5f5" : "#1e1e1e"};
                color: ${themeMode === "light" ? "#000000" : "#ffffff"};
              }
            `,
          },
        },
      }),
    [themeMode]
  );

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
