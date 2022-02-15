import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  canonicalPath?: string;
};

const SEO = ({ title, description, image }: SEOProps): JSX.Element => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const { defaultTitle, defaultDescription, defaultImage, keywords, origin } =
    site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    keywords: keywords,
    url: `${origin}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      <html lang="en" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png?v=1"
      />
      {false && <link rel="canonical" href={seo.url} />}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />

      <meta property="twitter:card" content="summary" />
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        keywords
        origin
      }
    }
  }
`;
