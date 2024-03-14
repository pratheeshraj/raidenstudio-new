import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} || raidenStudio
      </title>
      <meta
        name="description"
        content="raidenStudio"
      />
    </Helmet>
  );
};

export default HelmetReact;
