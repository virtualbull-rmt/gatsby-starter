import React from 'react';
import {Link} from 'gatsby';

export default class PaginationItem extends React.Component {
  render() {
    if(this.props.selectedPage === this.props.page) {
      return <Link to={'/blog/' + (this.props.page > 1 ? `${this.props.page}/` : '')} className="c-pagination__page is-current">{this.props.page}</Link>
    } else {
      return <Link to={'/blog/' + (this.props.page > 1 ? `${this.props.page}/` : '')} className="c-pagination__page">{this.props.page}</Link>
    }
  }
};