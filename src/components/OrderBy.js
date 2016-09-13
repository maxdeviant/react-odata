import React, { Component } from 'react';

class OrderBy extends Component {
  componentDidMount() {
    const { callback, children } = this.props;
    if (typeof callback === 'function') {
      callback(children);
    }
  }

  render() {
    return null;
  }
}

export default OrderBy;
