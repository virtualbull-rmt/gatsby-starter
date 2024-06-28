import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/full';
import Seo from '../components/seo';
import RecentPosts from '~components/recent-posts';
import CallToAction from '../components/call-to-action';
import { FormattedDate } from "react-intl"

export const pageQuery = graphql`query ($path: String!) {
  site {
    siteMetadata {
      siteUrl
    }
  }
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    html
    frontmatter {
      title
      author
      date(formatString: "x")
      path
      seo {
        title
        description
        keywords
      }
      thumbnail  {
          childImageSharp {
            gatsbyImageData(quality: 90)
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
      image={data.site.siteMetadata?.siteUrl + data.markdownRemark?.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData?.src}
      />

    <section className="c-page l-container c-post" itemType="http://schema.org/NewsArticle">
      <header className="c-page__main">
        <div className="c-page__sidebar"></div>
        <div className="c-page__content">
          <h1 className="l-headline--primary" itemProp="headline">{data.markdownRemark.frontmatter.title}</h1>

          <div className="c-post__meta">
            <span className="c-post__author" itemProp="author">{data.markdownRemark.frontmatter.author}</span>
            <span className="c-post__date" itemProp="datePublished">
              <FormattedDate
                value={new Date(parseInt(data.markdownRemark.frontmatter.date, 10))}
                year="numeric"
                month="long"
                day="2-digit"
              />
            </span>
          </div>
        </div>
        <div className="c-page__sidebar"></div>
      </header>

      <div className="c-page__main">
        <div className="c-page__sidebar"></div>
        <div className="c-page__content c-page__markdown" itemprop="articleBody" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        <div className="c-page__sidebar"></div>
      </div>
    </section>

    <RecentPosts />
    <CallToAction />
  </Layout>
);