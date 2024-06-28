import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FaCheck } from 'react-icons/fa';

import './style.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        cta: file(relativePath: {regex: "/components/cta.yaml/"}) {
          yaml: childComponentsYaml {
            advantages
            button {
              client
              worker
            }
          }
        }
      }
    `}
    render={data => (
      <aside className="c-call-to-action">
        <div className="c-call-to-action__inner l-container">
          <div className="c-call-to-action__content">
            <div className="c-advantages">
              {data.cta.yaml.advantages.map((item, key) => (
                <div className="c-advantage" key={key}>
                  <FaCheck className="c-advantage__icon" />

                  <div className="c-advantage__text">{item}</div>
                </div>
              ))}
            </div>
            <div className="c-call-to-action__buttons">
              <a href="https://mijn.homeworks.nl/intake/client/step1?locale=nl_NL" rel="noopener noreferrer nofollow" className="c-call-to-action__btn c-btn">{data.cta.yaml.button.client}</a>
              <a href="https://mijn.homeworks.nl/intake/worker/step1?locale=nl_NL" rel="noopener noreferrer nofollow" className="c-call-to-action__btn c-btn">{data.cta.yaml.button.worker}</a>
            </div>
          </div>
        </div>
      </aside>
    )} />
);
