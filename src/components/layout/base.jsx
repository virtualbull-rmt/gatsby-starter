import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { IntlProvider } from "react-intl"

import Seo from "../seo"

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", function(e) {
    e.preventDefault()
    return false
  })
}

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            lang
            seo {
              title
              description
              keywords
              author
            }
          }
        }
      }
    `
  )

  return (
    <IntlProvider locale="nl-nl">
      <Helmet htmlAttributes={{ lang: data.site.siteMetadata.lang }}>
        <meta charSet="utf-8" />

        <link rel="icon" href="/favicon.ico" />

        <meta
          name="healthcheck"
          content="bed697a3-ad3e-420b-bbd8-961f936abe46"
        />
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        /> */}
      </Helmet>

      <Seo
        title={data.site.siteMetadata.seo.title}
        description={data.site.siteMetadata.seo.description}
        keywords={data.site.siteMetadata.seo.keywords}
        author={data.site.siteMetadata.seo.author}
        canonical="/"
      />

      {children}
    </IntlProvider>
  )
}
