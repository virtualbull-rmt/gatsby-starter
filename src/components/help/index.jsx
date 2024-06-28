import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { FaQuestionCircle } from "react-icons/fa"

import "./style.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        help: file(relativePath: { regex: "/components/help.yaml/" }) {
          yaml: childComponentsYaml {
            text
            navigation {
              anchor
              url
            }
          }
        }
      }
    `}
    render={data => (
      <div className="c-help">
        <div className="c-help__content l-container">
          <div className="c-help__question">
            <FaQuestionCircle className="c-help__icon" /> {data.help.yaml.text}
          </div>
          <div className="c-help__buttons">
            {data.help.yaml.navigation.map((item, key) => (
              <div className="c-help__button" key={key}>
                <Link to={item.url} className="c-btn-text c-btn-text--white">
                  {item.anchor}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  />
)
