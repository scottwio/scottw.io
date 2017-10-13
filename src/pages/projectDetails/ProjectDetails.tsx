import * as React from 'react';

class ProjectDetails extends React.Component {
  props: any;
  componentWillMount() {
    console.log(this.props.match.params.uri);
  }
  render() {
    return (<div />);
  }
}

export {ProjectDetails}; 