import React from 'react';
import { graphql } from 'gatsby';

import { Helmet } from 'react-helmet';
import { useStaticQuery } from 'gatsby';

export default ({
  title,
  description,
  keywords,
  author,
  noIndex,
  canonical = '',
  image = 'https://s3-eu-west-1.amazonaws.com/hw-cms/files/hero/homeworks-huishoudelijke-hulp.jpg',
  lang = 'nl-NL'
}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            lang
          }
        }
      }
    `
  );

  const fullCanonical = data.site.siteMetadata.siteUrl + canonical + (canonical.length && canonical[canonical.length - 1] !== '/' ? '/' : '');

  return (
    <Helmet htmlAttributes={{ lang: lang || data.site.siteMetadata.lang }}>
      <title>{title}</title>

      <link rel="canonical" href={fullCanonical} />

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {
        noIndex ? (<meta name="robots" content="noindex" />) : null
      }

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={data.site.siteMetadata.siteUrl + canonical} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};
