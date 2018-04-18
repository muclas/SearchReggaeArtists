import React from 'react';
import SearchBox from './SearchBox';
import SearchList from './SearchList'

export default class SearchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      origlist: [],
      loading: false,
    };
  }
  componentWillMount() {
    this.setState({
      loading: true,
    });
  }

  componentDidMount() {
    if (this.state.loading) {
      fetch("https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json")
      .then((response) => {
        return response.json();
      })
      .then((js) => {
        this.setState({
          list: js.Reggae,
          origlist: js.Reggae,
          loading: false,
        });
      });
    }
  }

  changed = (e) => {
    this.setState({
      list: this.state.origlist.filter(w => w.indexOf(e) > -1),
    })
  };

  render() {
    return (
      <div>
        <SearchBox onChanged={this.changed} />
        <SearchList list={this.state.list} />
      </div>
    );
  }
}