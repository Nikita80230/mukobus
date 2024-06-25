import React from "react";
import { Helmet } from "react-helmet";

import previewImg from "../../assets/images/previewImg.png";

const SEO = ({ description = "", title = "" }) => {
  const metaDescription = description;
  const defaultTitle = title;

  return (
    <Helmet>
      <title>{defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={previewImg} />
    </Helmet>
  );
};

export default SEO;
