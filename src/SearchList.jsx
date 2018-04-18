import React from 'react';

export default class SearchList extends React.Component {
  render() {
    return (
      <ul>
      {this.props.list.map((e) => 
        <li>{e}</li>
      )}
      </ul>
    );
  }
}