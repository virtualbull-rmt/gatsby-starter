import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout/full';
import Seo from '../components/seo';
import Question from '../components/question';
import CallToAction from '../components/call-to-action';

export const pageQuery = graphql`
  query($path: String!) {
    faq: markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        questions {
          answer
          question
        }
        seo {
          description
          keywords
          title
        }
      }
    }
  }
`

export default ({ data, location, path }) => (
  <Layout>
    <Seo 
      title={data.faq.frontmatter.seo.title}
      description={data.faq.frontmatter.seo.description}
      keywords={data.faq.frontmatter.seo.keywords}
      canonical={location.pathname}
      />

    <section className="c-faq">
      <div className="c-faq__inner l-container">
       <h2 className="c-faq__headline l-headline--secondary">{data.faq.frontmatter.title}</h2>

        <div className="c-questions">
          {data.faq.frontmatter.questions ? data.faq.frontmatter.questions.map((question, key) => (
            <Question 
              question={question.question} 
              answer={question.answer}
              key={key} />
          )) : ''}
        </div>

        <div className="c-faq__btn">
          <Link to="/klantenservice/" className="c-btn-secondary">Overige vragen?</Link>
        </div>
      </div>
    </section>

    <CallToAction />
  </Layout>
);