import React from "react"
import { StaticQuery, graphql, Link, useStaticQuery } from "gatsby"
import { FormattedDate } from 'react-intl';
import "./style.scss"
export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/pages/homepage/client/locations/"}}
          sort: { frontmatter: { date: ASC } }
        ) {
          edges {
            node {
              frontmatter {
                path,
                city_name
              }
            }
          }
        }
      }
    `
  );

  console.log('11111111 777777', data);

  return(
  <section className="c-page l-container">
    <div className="c-page__main">
      <div className="c-page__content c-quick-nav--content">
        <h3 className="l-headline--tertiary ">Populaire huishoudelijke hulp steden</h3> 
          <div className="c-quick-nav">
            {data.allMarkdownRemark.edges
              .map((node, sectionKey) => {
                return(
                <>
                      <div className="c-quick-nav__item" key={sectionKey}>
                        <Link
                          to={node.node.frontmatter.path}
                          className="c-vertical-nav__item c-quick-nav__link"
                        >
                          {node.node.frontmatter.city_name || node.node.frontmatter.path?.split('/')[2]}
                        </Link>
                      </div>
                </>
              )})}
            
          </div>
      </div>
    </div>
  </section>
)};






