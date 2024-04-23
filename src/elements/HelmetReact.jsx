import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title, description, keywords, ogimage }) => {
  return (
    <Helmet>
      <title>{title} || raidenStudio</title>
      
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:image" content={ogimage} />
    </Helmet>
  );
};

export default HelmetReact;
