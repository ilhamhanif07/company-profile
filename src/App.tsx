import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import getTheme from './theme/theme';
import ColorModeContext from './utils/ColorModeContext';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Article from "./pages/Article";
import DetailArticle from "./pages/DetailArticle";

const App = (): JSX.Element => {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      // The theme mode switch will invoke this method
      toggleColorMode: () => {
        window.localStorage.setItem("themeMode", mode === "dark" ? "light" : "dark");
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
    }),
    [mode]
  );

  useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem("themeMode");
      localTheme ? setMode(localTheme) : setMode("dark");
    } catch {
      setMode("dark");
    }
  }, []);

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Omnichannel Solution" defaultTitle="Omnichannel Solution" />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={getTheme(mode)}>
          <CssBaseline />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/article" element={<Article />} />
                <Route path="/article/:id" element={<DetailArticle />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </HelmetProvider>
  );
};

export default App;