import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import SearchControl from './SearchControl';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Header />
    <SearchControl />
  </div>
);

render(<App />, document.getElementById('root'));
