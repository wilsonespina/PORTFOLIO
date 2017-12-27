import React from 'react';
import Axios from 'axios';

class UsersIndex extends React.Component {
  state = {
    project: {}
  }

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    Axios
      .get('/api/projects')
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>PORTFOLIO PAGE</h1>


      </div>
    );
  }
}

export default UsersIndex;
