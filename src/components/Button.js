import React from 'react';
export default class Button extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {showing: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showing: !prevState.showing
    }));
  }

  render() {
    // let buttonVal =
    //   this.state.showing ? 'Hide' : 'Show';
    return (
      <button onClick={this.handleClick}>
        {this.state.showing ? 'Hide' : 'Show'}
      </button>
    );
  }
}
