import React from 'react';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.onChanged = this.onChanged.bind(this);
    this.state = { searchText: '' };
  }

  onChanged(e) {
    this.setState({ searchText: e.target.value });
    this.props.onChanged(e.target.value);
  }

  render() {
    return (
      <div>
        <h3>Search:</h3>
        <input type="text" placeholder="Search the List with React" value={this.state.searchText} 
        onChange={this.onChanged} />
      </div>
    );
  }
}