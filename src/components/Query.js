import React, { Component } from 'react';

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: ''
    };
  }

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            ...child.props,
            callback: val => this.setState({
              orderBy: val
            })
          })
        }, this)}
        {this.state.orderBy}
      </div>
    );
  }
}

export default Query;
