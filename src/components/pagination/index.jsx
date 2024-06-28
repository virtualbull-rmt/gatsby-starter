import React from "react"
import PaginationItem from "./item"

import "./style.scss"

function getPages(perPage, total) {
  return Math.ceil(total / perPage)
}

function getSelectedPage(offset, perPage) {
  return offset / perPage + 1
}

function getNextPage(selectedPage, pages) {
  return Math.min(selectedPage + 1, pages)
}

function getPrevPage(selectedPage) {
  return Math.max(selectedPage - 1, 1)
}

function getLinks(pages, perPage, total, selectedPage, width) {
  const max = pages
  const len = Math.min(max, width)
  const now = selectedPage
  const rgt = Math.min(now + Math.floor(len / 2), max)
  const lft = Math.max(rgt - len + 1, 1)

  const links = []

  for (let i = 0; i < len; i++) {
    links.push(i + lft)
  }

  return links
}

const WIDTH = 5

export default class Pagination extends React.Component {
  state = {
    offset: 0,
    total: 0,
    perPage: 10,
    width: 5,
  }

  static getDerivedStateFromProps(props, state) {
    const pages = getPages(props.perPage, props.total)
    const selectedPage = getSelectedPage(props.offset, props.perPage)
    const nextPage = getNextPage(selectedPage, pages)
    const prevPage = getPrevPage(selectedPage)
    const links = getLinks(
      pages,
      props.perPage,
      props.total,
      selectedPage,
      WIDTH
    )

    return {
      pages,
      selectedPage,
      nextPage,
      prevPage,
      links,
    }
  }

  render() {
    return (
      <div className="c-pagination">
        {this.state.links[0] > 1 ? (
          <PaginationItem selectedPage={this.state.selectedPage} page={1} />
        ) : (
          ""
        )}
        {this.state.links[0] > 2 ? (
          <div className="c-pagination__spacer">&hellip;</div>
        ) : (
          ""
        )}
        {this.state.links.map((page, key) => (
          <PaginationItem
            selectedPage={this.state.selectedPage}
            page={page}
            key={key}
          />
        ))}
        {this.state.links[this.state.links.length - 1] <
        this.state.pages - 1 ? (
          <div className="c-pagination__spacer">&hellip;</div>
        ) : (
          ""
        )}
        {this.state.links[this.state.links.length - 1] < this.state.pages ? (
          <PaginationItem
            selectedPage={this.state.selectedPage}
            page={this.state.pages}
          />
        ) : (
          ""
        )}
      </div>
    )
  }
}
