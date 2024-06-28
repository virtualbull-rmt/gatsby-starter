import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "~components/layout/full"
import Seo from "~components/seo"

export const query = graphql`
  query($path: String!, $limit: Int! = 10) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        headline
        seo {
          title
          description
          keywords
        }
        sections {
          name
          type
          items {
            anchor
            url
          }
        }
      }
    }
    blogs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: 0
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default ({ data, location }) => {
  return (
    <Layout>
      <Seo
        title={data.markdownRemark.frontmatter.seo.title}
        description={data.markdownRemark.frontmatter.seo.description}
        keywords={data.markdownRemark.frontmatter.seo.keywords}
        canonical={location.pathname}
      />
      <section className="c-page l-container">
        <header className="c-page__header">
          <div className="c-page__header-box">
            <h1 className="l-headline--primary">
              {data.markdownRemark.frontmatter.headline}
            </h1>
          </div>
        </header>

        <div className="c-page__main">
          <div className="c-page__sidebar"></div>
          <div className="c-page__content">
            <div className="c-sitemap">
              {data.markdownRemark.frontmatter.sections.map(
                (section, sectionKey) => (
                  <div
                    className={`c-sitemap__section ${
                      section.type === "blog" ? "c-sitemap__section--full" : ""
                    }`}
                    key={sectionKey}
                  >
                    <h3 className="l-headline--tertiary c-sitemap__headline">
                      {section.name}
                    </h3>
                    <div className="c-vertical-nav">
                      {section.type === "blog"
                        ? data.blogs.edges.map((item, itemKey) => (
                            <Link
                              to={item.node.frontmatter.path}
                              className="c-vertical-nav__item c-sitemap__link"
                              key={itemKey}
                            >
                              {item.node.frontmatter.title}
                            </Link>
                          ))
                        : section.items.map((item, itemKey) => (
                            <Link
                              to={item.url}
                              className="c-vertical-nav__item c-sitemap__link"
                              key={itemKey}
                            >
                              {item.anchor}
                            </Link>
                          ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="c-page__sidebar"></div>
        </div>
      </section>
    </Layout>
  )
}
