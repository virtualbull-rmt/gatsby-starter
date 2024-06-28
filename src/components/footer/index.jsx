import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"

import img from "~img"
import "./style.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        footer: file(relativePath: { regex: "/components/footer.yaml/" }) {
          yaml: childComponentsYaml {
            contact {
              social {
                facebook
                twitter
                linkedin
                instagram
              }
              phoneNumbers {
                number
                comment
              }
              emailAddresses {
                email
              }
            }
            navigations {
              services {
                headline
                items {
                  anchor
                  url
                }
              }
              domesticCleaning {
                headline
                items {
                  anchor
                  url
                }
              }
              cleaningWork {
                headline
                items {
                  anchor
                  url
                }
              }
              general {
                headline
                items {
                  anchor
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div
        className="c-footer"
        itemscope
        itemtype="http://schema.org/Organization"
      >
        <div className="c-footer__inner l-container">
          <div className="c-footer__about">
            <Link to="/">
              <img
                src={img.logo}
                alt="Logo"
                className="c-footer__logo"
                itemprop="logo"
              />
            </Link>

            <div className="c-social-icons">
              <a
                href={data.footer.yaml.contact.social.facebook}
                className="c-social-icon"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href={data.footer.yaml.contact.social.linkedin}
                className="c-social-icon"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={data.footer.yaml.contact.social.twitter}
                className="c-social-icon"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                href={data.footer.yaml.contact.social.instagram}
                className="c-social-icon"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>

            <div className="c-footer__contact">
              {data.footer.yaml.contact.phoneNumbers.map((item, key) => (
                <a
                  href={"tel:" + item.number.split(" ").join("")}
                  className="c-footer__anchor"
                  key={key}
                >
                  <span itemprop="telephone">{item.number}</span>
                  {item.comment ? (
                    <>
                      {" "}
                      <span className="c-footer__extra">{item.comment}</span>
                    </>
                  ) : (
                    ""
                  )}
                </a>
              ))}
              {data.footer.yaml.contact.emailAddresses.map((item, key) => (
                <a
                  href={"mailto:" + item.email}
                  className="c-footer__anchor"
                  key={key}
                >
                  <span itemprop="email">{item.email}</span>
                  {item.comment ? (
                    <>
                      {" "}
                      <span className="c-footer__extra">{item.comment}</span>
                    </>
                  ) : (
                    ""
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="c-footer__navs">
            <div className="c-footer__nav">
              <h3 className="c-footer__subtitle l-headline--tertiary">
                {data.footer.yaml.navigations.services.headline}
              </h3>
              <div className="c-vertical-nav">
                {data.footer.yaml.navigations.services.items.map(
                  (item, key) => (
                    <Link
                      to={item.url}
                      className="c-vertical-nav__item"
                      key={key}
                    >
                      {item.anchor}
                    </Link>
                  )
                )}
              </div>
            </div>
            <div className="c-footer__nav">
              <h3 className="c-footer__subtitle l-headline--tertiary">
                {data.footer.yaml.navigations.domesticCleaning.headline}
              </h3>
              <div className="c-vertical-nav">
                {data.footer.yaml.navigations.domesticCleaning.items.map(
                  (item, key) => (
                    <Link
                      to={item.url}
                      className="c-vertical-nav__item"
                      key={key}
                    >
                      {item.anchor}
                    </Link>
                  )
                )}
              </div>
            </div>
            <div className="c-footer__nav">
              <h3 className="c-footer__subtitle l-headline--tertiary">
                {data.footer.yaml.navigations.cleaningWork.headline}
              </h3>
              <div className="c-vertical-nav">
                {data.footer.yaml.navigations.cleaningWork.items.map(
                  (item, key) => (
                    <Link
                      to={item.url}
                      className="c-vertical-nav__item"
                      key={key}
                    >
                      {item.anchor}
                    </Link>
                  )
                )}
              </div>
            </div>
            <div className="c-footer__nav">
              <h3 className="c-footer__subtitle l-headline--tertiary">
                {data.footer.yaml.navigations.general.headline}
              </h3>
              <div className="c-vertical-nav">
                {data.footer.yaml.navigations.general.items.map((item, key) => (
                  <Link
                    to={item.url}
                    className="c-vertical-nav__item"
                    key={key}
                  >
                    {item.anchor}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  />
)
