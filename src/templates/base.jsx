import React from 'react';
import {graphql} from 'gatsby';

import Layout from "~components/layout/full";
import Seo from '~components/seo';

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        headline
        seo {
          title
          description
          keywords
        }
      }
    }
  }
`;

export default ({data, location}) => (
  <Layout>
    <Seo 
      title={data.markdownRemark.frontmatter.seo.title}
      description={data.markdownRemark.frontmatter.seo.description}
      keywords={data.markdownRemark.frontmatter.seo.keywords}
      canonical={location.pathname} />

    <section className="c-page l-container">
      <header className="c-page__header">
        <div className="c-page__header-box">
          <h1 className="l-headline--primary">{data.markdownRemark.frontmatter.headline}</h1>
        </div>
      </header>

      <div className="c-page__main">
        <div className="c-page__sidebar"></div>
        <div className="c-page__content c-page__markdown" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        <div className="c-page__sidebar"></div>
      </div>
    </section>
  </Layout>
);