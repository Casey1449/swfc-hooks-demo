import { Component } from 'react';

class OnlineStatus extends Component {
  componentDidMount() {
    console.log("You used the 'ConsoleLog' render props component!");
  }
  render() {
    return this.props.render();
  }
}

export default OnlineStatus;
