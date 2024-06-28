import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "~components/layout/full"
import CallToAction from "~components/call-to-action"
import Seo from "~components/seo"
import ClientCities from "~components/client-cities"

export const query = graphql`{
  markdownRemark(fileAbsolutePath: {regex: "/pages/domestic_help.md/"}) {
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
          <div className="l-headline--primary">
            {data.markdownRemark.frontmatter.headline}
          </div>
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

      <div className="c-note c-note--yellow">
        <div className="c-note__content">
          {data.markdownRemark.frontmatter.note.content}
        </div>
        <div className="c-note__img">
          {data.markdownRemark.frontmatter.note.picture &&
          data.markdownRemark.frontmatter.note.picture.childImageSharp ? (
            <GatsbyImage
              image={data.markdownRemark.frontmatter.note.picture.childImageSharp.gatsbyImageData}
              className="c-page__img" />
          ) : null}
        </div>
      </div>

      <div className="c-page__main">
        <div className="c-page__sidebar"></div>
        <div
          className="c-page__content c-page__markdown"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
        <div className="c-page__sidebar"></div>
      </div>
    </section>

    <CallToAction />
    <ClientCities />
  </Layout>
)
