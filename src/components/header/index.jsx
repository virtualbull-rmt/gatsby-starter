import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Helmet from "react-helmet"
import classNames from "classnames"
import { FaBars, FaTimes, FaRegUser } from "react-icons/fa"

import img from "~img"
import "./style.scss"

export default class Header extends React.Component {
  state = {
    isExpanded: false,
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            header: file(relativePath: { regex: "/components/header.yaml/" }) {
              yaml: childComponentsYaml {
                navigations {
                  left {
                    anchor
                    url
                    isFeatured
                  }
                  right {
                    anchor
                    url
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              bodyAttributes={{
                class: classNames({
                  "l-no-overflow": this.state.isExpanded,
                }),
              }}
            />
            <header className="c-header__container">
              <div
                className={classNames("c-header", "l-container", {
                  "c-header--expanded": this.state.isExpanded,
                })}
              >
                <div className="c-header__bar">
                  <button
                    type="button"
                    className="c-header__hamburger"
                    aria-label="Main Menu"
                    onClick={() => this.toggleNavbar()}
                  >
                    <FaBars className="c-header__collapse" />
                    <FaTimes className="c-header__expand" />
                  </button>
                  <div className="c-header__logo">
                    <Link to="/">
                      <img src={img.logo} alt="" />
                    </Link>
                  </div>
                  <div className="c-header__navbar">
                    <div className="c-horizontal-nav">
                      {data.header.yaml.navigations.left.map((item, key) => (
                        <Link
                          to={item.url}
                          className={
                            "c-horizontal-nav__item" +
                            (item.isFeatured
                              ? " c-horizontal-nav__item--featured"
                              : "")
                          }
                          key={key}
                        >
                          {item.anchor}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="c-header__navbar c-header__navbar--right">
                    <div className="c-horizontal-nav">
                      <a
                        href={data.header.yaml.navigations.right.url}
                        className="c-horizontal-nav__item"
                        rel="nofollow"
                      >
                        {data.header.yaml.navigations.right.anchor}
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://mijn.homeworks.nl"
                    className="c-header__auth"
                    rel="nofollow"
                  >
                    <FaRegUser />
                  </a>
                </div>
                <div className="c-header__content">
                  <div className="c-vertical-nav">
                    {data.header.yaml.navigations.left.map((item, key) => (
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
            </header>
          </>
        )}
      />
    )
  }

  toggleNavbar() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }
}
