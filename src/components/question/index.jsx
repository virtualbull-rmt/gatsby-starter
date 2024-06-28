import React from "react"
import { FaPlus, FaMinus } from "react-icons/fa"
import classNames from "classnames"

import simplifiedMarkdown from "~utils/simplified-markdown"

import "./style.scss"

export default class Question extends React.Component {
  state = {
    isExpanded: false,
  }

  render() {
    return (
      <div
        className={classNames("c-question", {
          "c-question--expanded": this.state.isExpanded,
        })}
        itemScope
        itemType="http://schema.org/Question"
      >
        <button
          type="button"
          className="c-question__header"
          onClick={() => this.toggle()}
        >
          <div className="c-question__text" itemProp="text">
            {this.props.question}
          </div>
          <div className="c-question__toggle">
            <FaPlus className="c-question__expand" />
            <FaMinus className="c-question__collapse" />
          </div>
        </button>
        <div
          className="c-question__content"
          itemProp="acceptedAnswer"
          itemScope
          itemType="http://schema.org/Answer"
        >
          <span
            itemProp="text"
            dangerouslySetInnerHTML={{
              __html: simplifiedMarkdown(this.props.answer),
            }}
          ></span>
        </div>
      </div>
    )
  }

  toggle() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }
}
