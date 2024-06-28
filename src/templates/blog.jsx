import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from '~components/layout/full';
import Pagination from '~components/pagination';
import Seo from '~components/seo';
import { FormattedDate } from "react-intl"

export const query = graphql`query ($offset: Int!, $limit: Int!) {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/blog/"}}
    sort: {order: DESC, fields: [frontmatter___date]}
    limit: $limit
    skip: $offset
  ) {
    edges {
      node {
        frontmatter {
          thumbnail {
            childImageSharp {
              gatsbyImageData(quality: 90)
            }
          }
          title
          date(formatString: "x")
          path
        }
      }
    }
  }
}`;

const BlogPage = ({data, pageContext, location}) => {
  console.log(data.allMarkdownRemark.edges); // Log the edges array to inspect data

  return (
    <Layout>
      <Seo 
        title="Blog"
        canonical={location.pathname}
      />

      <section className="c-page l-container">
        <header className="c-page__header">
          <div className="c-page__header-box">
            <h1 className="l-headline--primary">Blog</h1>
          </div>
        </header>
      </section>

      <div className="c-blog l-container">
        <div className="c-articles">
          {data.allMarkdownRemark.edges.map((edge, key) => {
            console.log(edge.node.frontmatter); // Log frontmatter for each edge
            return (
              <Link to={edge.node.frontmatter.path} className="c-article" key={key}>
                {edge.node.frontmatter.thumbnail?.childImageSharp ? (
                  <GatsbyImage
                    image={edge.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                    className="c-article__img"
                  />
                ) : (
                  <div className="c-article__img test-img-cls"></div>
                )}
                <div className="c-article__content">
                  <div className="c-article__title">{edge.node.frontmatter.title}</div>
                  <div className="c-article__date">
                    <FormattedDate
                      value={new Date(parseInt(edge.node.frontmatter.date, 10))}
                      year="numeric"
                      month="long"
                      day="2-digit"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <Pagination 
          offset={pageContext.offset} 
          limit={pageContext.limit} 
          perPage={pageContext.perPage} 
          total={pageContext.total} 
        />
      </div>
    </Layout>
  );
};

export default BlogPage;
