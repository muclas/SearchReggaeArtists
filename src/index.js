import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import SearchBox from './SearchBox';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const changed = (e) => {};

const App = () => (
  <div style={styles}>
    <Header />
    <SearchBox onChanged={changed} />
  </div>
);

render(<App />, document.getElementById('root'));
