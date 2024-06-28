import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { FormattedDate } from 'react-intl';

import './style.scss';

export default () => {
  const data = useStaticQuery(
    graphql`{
  allMarkdownRemark(
    limit: 3
    filter: {fileAbsolutePath: {regex: "/blog/"}}
    sort: [{frontmatter: {date: DESC}}, {frontmatter: {title: DESC}}]
  ) {
    edges {
      node {
        frontmatter {
          thumbnail  {
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
}`
  );

  return (
    <section className="c-recent-posts l-container">
      <div className="c-recent-posts__header">
        <div className="c-recent-posts__headline l-headline--secondary">Actueel</div>
        <Link to="/blog/" className="c-btn-text">Blog</Link>
      </div>
      <div className="c-articles">
        
        {data.allMarkdownRemark.edges.map((edge, key) => (
          <Link to={edge.node.frontmatter.path} className="c-article" key={key}>
            {edge.node.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData ? (
              <GatsbyImage
                image={edge.node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData}
                alt={edge.node.frontmatter.title}
                className="c-article__img" />
            ) : (
              <div className="c-article__img"></div>
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
        ))}
      </div>
    </section>
  );
};
