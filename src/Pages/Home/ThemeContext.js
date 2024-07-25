import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import lightBulbIcon from "../../assets/blubOn.png";
import darkBulbIcon from "../../assets/blubOff.png";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

function getCssVariableValue(variable) {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDarkMode ? "dark" : "light";
  };

  const [themeMode, setThemeMode] = useState(getInitialTheme);

  const theme = useMemo(() => {
    const primaryColor = getCssVariableValue('--primary');
    const textColor = getCssVariableValue(themeMode === "light" ? '--primary' : '--text-light');
    const backgroundColor = getCssVariableValue(themeMode === "light" ? '--bg-shade' : '--bg-dark');
    const paperColor = getCssVariableValue(themeMode === "light" ? '--bg-shade' : '--bg-dark');

    return createTheme({
      palette: {
        mode: themeMode,
        primary: {
          main: primaryColor,
        },
        background: {
          default: backgroundColor,
          paper: paperColor,
        },
        text: {
          primary: textColor,
        },
      },
      typography: {
        allVariants: {
          color: textColor,
        },
      },
      icons: {
        bulb: themeMode === "light" ? darkBulbIcon : lightBulbIcon,
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            body {
              background-color: ${backgroundColor};
              color: ${textColor};
            }
            a {
              color: ${themeMode === "light" ? "#0000ff" : "#90caf9"};
            }
            .hero--section {
              background-color: ${backgroundColor};
            }
            .hero--section .section-title,
            .hero--section .hero--section-description {
              color: ${textColor};
            }
            .main--container {
              background-color: ${backgroundColor};
              color: ${textColor};
            }
            .contact--form--container {
              background-color: ${themeMode === "light" ? "#f5f5f5" : paperColor};
              color: ${textColor};
            }
          `,
        },
      },
    });
  }, [themeMode]);

  useEffect(() => {
    document.body.setAttribute('data-theme', themeMode);
    localStorage.setItem("theme", themeMode); // Ensure theme preference is saved on theme change
  }, [themeMode]);

  useEffect(() => {
    const handleSystemThemeChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setThemeMode(e.matches ? "dark" : "light");
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
