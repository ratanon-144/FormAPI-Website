import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { getSession } from "@/store/slices/userSlice";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { blue, grey, orange, red, yellow } from "@mui/material/colors";
import { store } from "quiz/store";

function MyApp({ Component, pageProps }: AppProps) {
  const drawerWidth = 240;

  const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundImage: 'url("")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            width: drawerWidth,
          },
        },
      },
    },
    typography: {
      fontFamily: "Roboto",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    spacing: 8,
    palette: {
      primary: process.env.NEXT_PUBLIC_IS_PRODUCTION == "0" ? blue : blue,
      background: {
        default: "",
      },
    },
  });

  // update session & set token
   // React.useEffect(() => {
   //   store.dispatch(getSession());
   // }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;