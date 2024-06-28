import React from "react"
import { Link } from "gatsby"

import img from "~img"

import "./style.scss"

export default () => (
  <div className="c-copyright l-container">
    <div className="c-copyright__content">
      <div className="c-copyright__text">&copy; Home Works 2023</div>

      <div className="c-copyright__nav c-horizontal-nav">
        <Link to="/algemene-voorwaarden/" className="c-horizontal-nav__item">
          Algemene Voorwaarden
        </Link>
        <a
          href="https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=57001448&origq=vereniging+home+works"
          rel="noopener noreferrer nofollow"
          target="_blank"
          className="c-horizontal-nav__item"
        >
          KvK inschrijving
        </a>
      </div>

      <div className="c-copyright__feedback-company c-feedback-company">
        <a
          href="https://www.feedbackcompany.com/nl-nl/reviews/home-works/"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <img
            src={img.feedback_company}
            width="108"
            height="30"
            alt="Feedback company"
            className="c-feedback-company__logo"
          />
        </a>
        <div className="c-feedback-company__score">
          8.8/10 (423 beoordelingen)
        </div>
      </div>
    </div>
  </div>
)
