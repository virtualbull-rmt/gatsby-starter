import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
//import Img from 'gatsby-plugin-image'

export default ({ data }) => {
  console.log(data);
  const post = data.markdownRemark;
  const image = getImage(post.frontmatter.image);
  // const fluid = post.frontmatter.image.childImageSharp.fluid

  return (
    <article>
      <h1>{post.frontmatter.title}</h1>
      <GatsbyImage image={image} alt="Image Alt Text" />
      {/* <Img fluid={fluid} alt={post.frontmatter.title} /> */}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}

export const query = graphql`
  query ($pagePath: String!) {
    markdownRemark(frontmatter: {path: {eq: $pagePath}}) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
