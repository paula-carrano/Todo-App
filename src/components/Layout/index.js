import React from "react";
import { Header, Footer, Aside } from "./components";
import "./styles.css";

const Layout = (props) => {
  const { children, hideHeader, hideAside, hideFooter } = props;

  return (
    <div className="layout">
      {hideAside === false && <Aside />}

      <div className="contenedor">
        {hideHeader === false && <Header />}
        {children}
        {hideFooter === false && <Footer />}
      </div>
    </div>
  );
};

Layout.defaultProps = {
  hideHeader: false,
  hideAside: false,
  hideFooter: false,
};

export { Layout };
