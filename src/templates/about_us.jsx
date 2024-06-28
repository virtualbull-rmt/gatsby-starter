import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "~components/layout/full"
import Seo from "~components/seo"
import CallToAction from "~components/call-to-action"

export const query = graphql`{
  markdownRemark(fileAbsolutePath: {regex: "/pages/about_us.md/"}) {
    frontmatter {
      headline
      intro
      seo {
        title
        description
        keywords
      }
      team {
        headline
        description
        people {
          name
          role
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                width: 468
                height: 468
                transformOptions: {cropFocus: ATTENTION}
                layout: CONSTRAINED
              )
            }
          }
        }
      }
      collaboration {
        headline
        companies {
          name
          thumbnail {
            childImageSharp {
              gatsbyImageData(quality: 90)
            }
          }
        }
      }
    }
    html
  }
}`

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
        <header className="c-page__main">
          <div className="c-page__sidebar"></div>
          <div className="c-page__content">
            <h1 className="l-headline--primary">
              {data.markdownRemark.frontmatter.headline}
            </h1>
            <div className="c-page__intro">
              {data.markdownRemark.frontmatter.intro}
            </div>
          </div>
          <div className="c-page__sidebar"></div>
        </header>

        <div className="c-page__main">
          <div className="c-page__sidebar"></div>
          <div
            className="c-page__content c-page__markdown"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
          <div className="c-page__sidebar"></div>
        </div>
      </section>

      <section className="c-members">
        <div className="c-page__header">
          <div className="c-page__header-box">
            <h2
              className="l-headline--secondary"
              style={{ textAlign: "center" }}
            >
              {data.markdownRemark.frontmatter.team.headline}
            </h2>
            <div className="c-page__description">
              {data.markdownRemark.frontmatter.team.description}
            </div>
          </div>
        </div>
        <div className="l-container">
          <div className="c-members--grid">
            {data.markdownRemark.frontmatter.team.people.map((member, key) => (
              <div className="c-member" key={key}>
                {member.thumbnail && member.thumbnail.childImageSharp ? (
                  <GatsbyImage
                    image={member.thumbnail?.childImageSharp?.gatsbyImageData}
                    alt={member.name}
                    className="c-member__img" />
                ) : (
                  <div className="c-member__img"></div>
                )}
                <div className="c-member__content">
                  <h3 className="c-member__name l-headline--tertiary">
                    {member.name}
                  </h3>
                  <div className="c-member__role">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="c-page l-container">
        <h2 className="l-headline--secondary" style={{ textAlign: "center" }}>
          {data.markdownRemark.frontmatter.collaboration.headline}
        </h2>

        <div className="c-companies">
          {data.markdownRemark.frontmatter.collaboration.companies.map(
            (company, key) => (
              <div className="c-company" key={key}>
                {company.thumbnail && company.thumbnail.childImageSharp ? (
                  <GatsbyImage
                    image={company.thumbnail.childImageSharp.gatsbyImageData}
                    alt={company.name}
                    imgStyle={{ objectFit: "contain" }}
                    className="c-company__img" />
                ) : (
                  ""
                )}
              </div>
            )
          )}
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
}
