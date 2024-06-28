import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import classNames from "classnames"

import Layout from "~components/layout/full"
import Seo from "~components/seo"
import img from "~img"
import Stars from "~components/stars"
import RecentPosts from "~components/recent-posts"
import CallToAction from "~components/call-to-action"
import Question from "~components/question"
import ClientCities from "~components/client-cities"
import simplifiedMarkdown from "~utils/simplified-markdown"
import WorkCities from "~components/worker-cities"

export const query = graphql`query ($path: String!) {
  index: markdownRemark(frontmatter: {path: {eq: $path}}) {
    yaml: frontmatter {
      seo {
        title
        description
        keywords
        lang
      }
      lead {
        headline
        lookingForWorker
        lookingForClient
        picture {
          childImageSharp {
            gatsbyImageData(quality: 90)
          }
        }
        alt
      }
      history {
        content
        button
        url
      }
      usp {
        headline
        propositions {
          icon {
            publicURL
          }
          name
          description
        }
        button
      }
      banner {
        headline
        description
        button
        url
        picture {
          childImageSharp {
            gatsbyImageData(quality: 90, layout: FULL_WIDTH)
          }
        }
        alt
      }
      introduction {
        headline
        description
        button
        picture {
          childImageSharp {
            gatsbyImageData(quality: 90, layout: FULL_WIDTH)
          }
        }
        alt
      }
      ourTeam {
        headline
        members {
          picture {
            childImageSharp {
              gatsbyImageData(quality: 90, layout: FULL_WIDTH)
            }
          }
          alt
          name
          role
          description
        }
      }
      feedback {
        headline
        score
        reviews {
          author
          score
          content
        }
        footnote
        readMore
        feedbackCompanyUrl
        alt
      }
      faq {
        headline
        questions {
          question
          answer
        }
        button
        url
      }
      textblock {
        headline
        content
      }
      recentPosts {
        headline
        button
      }
      quickNav {
        type
      }
    }
  }
}`
const isClientPage = typeof window !== `undefined` ? window.location?.pathname.split('/')[1] === 'schoonmaakwerk' : false;

export default ({ data, location }) => {

  const isWorkersHomepage = location.pathname.indexOf('schoonmaakwerk') >= 0;

  console.log('11111111 00000000', data.index);

  return (
    <Layout>
      <Seo
        title={data.index.yaml.seo.title}
        description={data.index.yaml.seo.description}
        keywords={data.index.yaml.seo.keywords}
        lang={data.index.yaml.seo.lang}
        canonical={location.pathname}
      />
      <section className={classNames("c-lead", "l-container")}>
        <div className="c-lead__headline">
          <h1 className="l-headline--primary">
            {data.index.yaml.lead.headline}
          </h1>
        </div>
        <div className="c-lead__wrapper">
          <div className="c-lead__actions">
            <a
              href="https://mijn.homeworks.nl/intake/client/step1?locale=nl_NL"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className={`c-btn c-lead__btn ${isWorkersHomepage && 'c-lead__btn--primary'}`}
            >
              {data.index.yaml.lead.lookingForWorker}
            </a>
            <a
              href="https://mijn.homeworks.nl/intake/worker/step1?locale=nl_NL"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className={`c-btn c-lead__btn ${!isWorkersHomepage && 'c-lead__btn--primary'}`}
            >
              {data.index.yaml.lead.lookingForClient}
            </a>
          </div>
          <div className="c-lead__background">
            <div className="c-lead__gradient-overlay"></div>
            {data.index.yaml.lead.picture && (
              <GatsbyImage
                image={data.index?.yaml?.lead?.picture?.childImageSharp?.gatsbyImageData}
                alt={data.index.yaml.lead.alt}
                className="c-lead__img"
                />
            )}
          </div>
        </div>
      </section>
      <aside className="c-history l-container">
        <div
          className="c-history__text"
          dangerouslySetInnerHTML={{
            __html: simplifiedMarkdown(data.index.yaml.history.content),
          }}
        ></div>

        <div className="c-history__btn">
          <Link to={data.index.yaml.history.url} className="c-btn-text">
            {data.index.yaml.history.button}
          </Link>
        </div>
      </aside>
      <section className="c-feedback" itemType="http://schema.org/Product">
        <div className="c-feedback__inner l-container">
          <h2
            className="c-feedback__headline l-headline--secondary"
            itemProp="name"
          >
            {data.index.yaml.feedback.headline}
          </h2>

          <div className="c-feedback__summary c-feedback-company">
            <img
              src={img.feedback_company}
              width="144"
              height="40"
              alt={data.index.yaml.feedback.alt}
              className="c-feedback-company__logo"
            />
            <Stars
              className="c-feedback-company__stars"
              score={data.index.yaml.feedback.score}
            />
            <div
              className="c-feedback-company__score"
              itemProp="aggregateRating"
              itemType="https://schema.org/AggregateRating"
            >
              <meta itemProp="worstRating" content="1" />
              <meta itemProp="reviewCount" content="325" />
              <span itemProp="ratingValue">
                {data.index.yaml.feedback.score}
              </span>
              /<span itemProp="bestRating">10</span>
            </div>
          </div>

          <div className="c-feedback__reviews c-reviews">
            {data.index.yaml.feedback.reviews.map((review, key) => (
              <div
                className="c-review"
                key={key}
                itemProp="review"
                itemType="https://schema.org/Review"
              >
                <div className="c-review__person" itemProp="author">
                  {review.author}
                </div>
                <div className="c-review__rate c-rate">
                  <Stars className="c-rate__stars" score={review.score} />
                  <div
                    className="c-rate__score"
                    itemProp="reviewRating"
                    itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="worstRating" content="1" />
                    <span itemProp="ratingValue">{review.score}</span>/
                    <span itemProp="bestRating">10</span>
                  </div>
                </div>
                <div className="c-review__content" itemProp="reviewBody">
                  {review.content}
                </div>
              </div>
            ))}
          </div>

          <div className="c-feedback__read-more">
            {data.index.yaml.feedback.footnote}{" "}
            <a
              href={data.index.yaml.feedback.feedbackCompanyUrl}
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="c-feedback__link"
            >
              {data.index.yaml.feedback.readMore}
            </a>
          </div>
        </div>
      </section>
      <section className="c-usp l-container">
        <div className="c-usp__headline">
          <h2 className="l-headline--secondary">
            {data.index.yaml.usp.headline}
          </h2>
        </div>

        <div className="c-usp__list">
          <div className="c-features c-features--inlined">
            {data.index.yaml.usp.propositions.map((proposition, key) => (
              <div className="c-feature" key={key}>
                <div className="c-feature__icon">
                  {proposition.icon && proposition.icon.publicURL ? (
                    <img
                      src={proposition.icon.publicURL}
                      alt={proposition.name}
                    />
                  ) : null}
                </div>
                <div className="c-feature__content">
                  <h3 className="c-feature__title l-headline--tertiary">
                    {proposition.name}
                  </h3>
                  <div className="c-feature__description">
                    {proposition.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <aside className="c-banner l-container">
        <div className="c-banner__background">
          <GatsbyImage
            image={data.index?.yaml?.banner?.picture?.childImageSharp?.gatsbyImageData}
            alt={data.index.yaml.banner.alt}
            className="c-banner__img" />
        </div>
        <div className="c-banner__highlight c-banner__highlight--left">
          <div className="c-banner__content">
            <h2 className="c-banner__title l-headline--secondary">
              {data.index.yaml.banner.headline}
            </h2>
            <div
              className="c-banner__text"
              dangerouslySetInnerHTML={{
                __html: simplifiedMarkdown(data.index.yaml.banner.description),
              }}
            ></div>

            {data.index.yaml.banner.url.charAt(0) === "/" ? (
              <Link
                to={data.index.yaml.banner.url}
                className="c-banner__btn c-btn-secondary"
              >
                {data.index.yaml.banner.button}
              </Link>
            ) : (
              <a
                href={data.index.yaml.banner.url}
                className="c-banner__btn c-btn-secondary"
              >
                {data.index?.yaml?.banner?.button}
              </a>
            )}
          </div>
        </div>
      </aside>
      <section className="c-intro l-container">
        <div className="c-intro__img">
          <GatsbyImage
            image={data.index?.yaml?.introduction?.picture?.childImageSharp?.gatsbyImageData}
            alt={data.index.yaml.introduction.alt} />
        </div>
        <div className="c-intro__right">
          <h2 className="c-intro__headline l-headline--secondary">
            {data.index.yaml.introduction.headline}
          </h2>
          <div
            className="c-intro__content"
            dangerouslySetInnerHTML={{
              __html: simplifiedMarkdown(
                data.index.yaml.introduction.description
              ),
            }}
          ></div>
          <div className="c-intro__btn">
            <Link to="/over-ons/" className="c-btn-text">
              {data.index.yaml.introduction.button}
            </Link>
          </div>
        </div>
      </section>
      <section className="c-team c-team--homepage">
        <div className="c-team__inner l-container">
          <h2 className="c-team__headline l-headline--secondary">
            {data.index.yaml.ourTeam.headline}
          </h2>

          <div className="c-members c-members--homepage">
            {data.index.yaml.ourTeam.members.map((member, key) => (
              <div className="c-member" key={key}>
                {member.picture && member.picture.childImageSharp ? (
                  <GatsbyImage
                    image={member.picture.childImageSharp.gatsbyImageData}
                    alt={member.alt}
                    className="c-member__img" />
                ) : null}
                <div className="c-member__content">
                  <h3 className="c-member__name l-headline--tertiary">
                    {member.name}
                  </h3>
                  <div className="c-member__role">{member.role}</div>
                  <div className="c-member__description">
                    {member.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="c-textblock l-container">
        <div className="c-textblock__title">
          <h2 className="l-headline--secondary">
            {data.index.yaml.textblock.headline}
          </h2>
        </div>
        <div
          className="c-textblock__content"
          dangerouslySetInnerHTML={{
            __html: simplifiedMarkdown(data.index.yaml.textblock.content),
          }}
        ></div>
      </div>
      <section className="c-faq">
        <div className="c-faq__inner l-container">
          <h2 className="c-faq__headline l-headline--secondary">
            {data.index.yaml.faq.headline}
          </h2>

          <div className="c-questions">
            {data.index.yaml.faq.questions
              ? data.index.yaml.faq.questions.map((question, key) => (
                  <Question
                    question={question.question}
                    answer={question.answer}
                    key={key}
                  />
                ))
              : ""}
          </div>

          <div className="c-faq__btn">
            <Link to={data.index.yaml.faq.url} className="c-btn-secondary">
              {data.index.yaml.faq.button}
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
      {isClientPage ? <WorkCities /> : <ClientCities />}
      <RecentPosts />
    </Layout>
  );
}
