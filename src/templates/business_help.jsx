import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "~components/layout/full"
import CallToAction from "~components/call-to-action"
import Seo from "~components/seo"
import ClientCities from "~components/client-cities"

export const query = graphql`{
  markdownRemark(fileAbsolutePath: {regex: "/pages/business_help.md/"}) {
    html
    frontmatter {
      seo {
        title
        description
        keywords
      }
      headline
      navigation {
        anchor
        url
        isActive
      }
      note {
        content
        picture {
          childImageSharp {
            gatsbyImageData(width: 648, quality: 90, layout: CONSTRAINED)
          }
        }
      }
      banner {
        headline
        description
        button
        picture {
          childImageSharp {
            gatsbyImageData(quality: 90, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}`

export default ({ data, location }) => (
  <Layout>
    <Seo
      title={data.markdownRemark.frontmatter.seo.title}
      description={data.markdownRemark.frontmatter.seo.description}
      keywords={data.markdownRemark.frontmatter.seo.keywords}
      canonical={location.pathname}
    />

    <section className="c-page l-container">
      <header className="c-page__main">
        <div className="c-page__sidebar"></div>
        <div className="c-page__content">
          <h1 className="l-headline--primary">
            {data.markdownRemark.frontmatter.headline}
          </h1>
          <div className="c-page__nav">
            <div className="c-horizontal-nav">
              {data.markdownRemark.frontmatter.navigation.map((item, key) => (
                <Link
                  to={item.url}
                  className={
                    "c-horizontal-nav__item" +
                    (item.isActive ? " c-horizontal-nav__item--underlined" : "")
                  }
                  key={key}
                >
                  {item.anchor}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="c-page__sidebar"></div>
      </header>

      <div className="c-note c-note--blue">
        <div className="c-note__content">
          {data.markdownRemark.frontmatter.note.content}
        </div>
        <div className="c-note__img">
          <GatsbyImage
            image={data.markdownRemark.frontmatter.note?.picture?.childImageSharp?.gatsbyImageData}
            className="c-page__img" />
        </div>
      </div>

      <div className="c-page__main">
        <div className="c-page__sidebar"></div>
        <div className="c-page__content">
          <div
            className="c-page__markdown"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>

          <a href="https://companyworks.nl" className="c-btn-text">
            CompanyWorks
          </a>
        </div>
        <div className="c-page__sidebar"></div>
      </div>
    </section>

    <aside className="c-banner c-banner--small l-container">
      <div className="c-banner__background">
        <GatsbyImage
          image={data.markdownRemark.frontmatter.banner?.picture?.childImageSharp?.gatsbyImageData}
          className="c-banner__img" />
      </div>
      <div className="c-banner__highlight c-banner__highlight--left">
        <div className="c-banner__content">
          <h2 className="c-banner__title l-headline--secondary">
            {data.markdownRemark.frontmatter.banner.headline}
          </h2>
          <div className="c-banner__text">
            {data.markdownRemark.frontmatter.banner.description}
          </div>
          <a
            href="https://mijn.homeworks.nl/intake/worker/step1?locale=nl_NL"
            rel="noopener noreferrer nofollow"
            className="c-banner__btn c-btn-secondary"
          >
            {data.markdownRemark.frontmatter.banner.button}
          </a>
        </div>
      </div>
    </aside>

    <CallToAction />
    <ClientCities />
  </Layout>
)
