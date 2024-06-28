import React from "react"
import { Link, graphql } from "gatsby"
import nl2br from "react-nl2br"
import { GatsbyImage } from "gatsby-plugin-image";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookMessenger,
  FaComments,
} from "react-icons/fa"

import Layout from "~components/layout/full"
import Seo from "~components/seo"
import CallToAction from "~components/call-to-action"

export const query = graphql`{
  services: markdownRemark(fileAbsolutePath: {regex: "/pages/services.md/"}) {
    yaml: frontmatter {
      seo {
        title
        description
        keywords
      }
      headline
      intro
      faq {
        headline
        categories {
          icon {
            publicURL
          }
          name
          description
          url
        }
      }
      communication {
        headline
        methods {
          name
          icon
          url
        }
        footnote
      }
      location {
        headline
        address
        url
        picture {
          childImageSharp {
            gatsbyImageData(quality: 90)
          }
        }
        alt
      }
      overview {
        headline
        correspondence {
          headline
          content
        }
        company {
          headline
          content
        }
        bank {
          headline
          content
        }
      }
    }
  }
}`

export default ({ data, location }) => (
  <Layout>
    <Seo
      title={data.services.yaml.seo.title}
      description={data.services.yaml.seo.description}
      keywords={data.services.yaml.seo.keywords}
      canonical={location.pathname}
    />

    <section className="c-page l-container">
      <header className="c-page__main">
        <div className="c-page__sidebar"></div>
        <div className="c-page__content">
          <h1 className="l-headline--primary">{data.services.yaml.headline}</h1>

          <div className="c-page__intro">{data.services.yaml.intro}</div>
        </div>
        <div className="c-page__sidebar"></div>
      </header>
    </section>

    <section className="c-page c-services l-container">
      <header className="c-page__header">
        <div className="c-page__header-box">
          <h2 className="l-headline--secondary">
            {data?.services?.yaml?.faq?.headline}
          </h2>
        </div>
      </header>

      <div className="c-services__list">
        <div className="c-features c-features--grid">
          {data.services.yaml.faq.categories.map((category, key) => (
            <Link to={category?.url} className="c-feature" key={key}>
              <div className="c-feature__icon">
                <img src={category?.icon?.publicURL} alt={category?.name} />
              </div>
              <div className="c-feature__content">
                <div className="c-feature__link">{category?.name}</div>
                <div className="c-feature__description">
                  {category?.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="c-page c-personal-contact l-container">
      <header className="c-page__header">
        <div className="c-page__header-box">
          <h2 className="l-headline--secondary">
            {data.services.yaml.communication.headline}
          </h2>
        </div>
      </header>

      <div className="c-methods">
        {data.services.yaml.communication.methods.map((method, key) => (
          <a href={method.url} className="c-method" key={key}>
            <span
              className="c-method__icon"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              {(() => {
                switch (method.icon) {
                  case "phone":
                    return <FaPhone />
                  case "whatsapp":
                    return <FaWhatsapp />
                  case "envelope":
                    return <FaEnvelope />
                  case "facebook-messenger":
                    return <FaFacebookMessenger />
                  case "comments":
                    return <FaComments />
                  default:
                    return <FaComments />
                }
              })()}
            </span>
            <div className="c-method__name">{method.name}</div>
          </a>
        ))}
      </div>

      <div className="c-page__main">
        <div className="c-page__sidebar"></div>
        <div className="c-page__content">
          <div className="c-page__description">
            {data?.services?.yaml?.communication?.footnote}
          </div>
        </div>
        <div className="c-page__sidebar"></div>
      </div>
    </section>

    <aside className="c-banner l-container">
      <div className="c-banner__background">
        <GatsbyImage
          image={data?.services?.yaml?.location?.picture?.childImageSharp?.gatsbyImageData}
          alt={data?.services?.yaml?.location?.alt}
          className="c-banner__img" />
      </div>
      <div className="c-banner__highlight c-banner__highlight--right">
        <div className="c-banner__content">
          <h2 className="c-banner__title l-headline--secondary">
            {data.services.yaml.location.headline}
          </h2>
          <div className="c-banner__text">
            {nl2br(data?.services?.yaml?.location?.address)}
          </div>
          <a
            href={data?.services?.yaml?.location?.url}
            className="c-banner__btn c-btn-secondary"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Google Maps
          </a>
        </div>
      </div>
    </aside>

    <section className="c-page l-container">
      <header className="c-page__header">
        <div className="c-page__header-box">
          <h2 className="l-headline--secondary">
            {data.services.yaml.overview.headline}
          </h2>
        </div>
      </header>
      <div className="c-overview">
        <div className="c-overview__column">
          <h3 className="c-overview__title l-headline--tertiary">
            {data.services.yaml.overview.correspondence.headline}
          </h3>
          <div className="c-overview__text">
            {nl2br(data.services.yaml.overview.correspondence.content)}
          </div>
        </div>
        <div className="c-overview__column">
          <h3 className="c-overview__title l-headline--tertiary">
            {data.services.yaml.overview.company.headline}
          </h3>
          <div className="c-overview__text">
            {nl2br(data.services.yaml.overview.company.content)}
          </div>
        </div>
        <div className="c-overview__column">
          <h3 className="c-overview__title l-headline--tertiary">
            {data.services.yaml.overview.bank.headline}
          </h3>
          <div className="c-overview__text">
            {nl2br(data.services.yaml.overview.bank.content)}
          </div>
        </div>
      </div>
    </section>

    <CallToAction />
  </Layout>
)
