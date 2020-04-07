import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyles from "./themes";
import Header from "./components/Header";
import Routes from "./routes";

const App = () => (
  <>
    <GlobalStyles />
    <ToastContainer />
    <Header />
    <Routes />
  </>
);

export default App;
