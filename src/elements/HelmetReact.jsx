import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/js/bootstrap.bundle.min";
const HelmetReact = ({ title, description, keywords, ogimage }) => {
  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:image" content={ogimage} />
    </Helmet>
  );
};

export default HelmetReact;
