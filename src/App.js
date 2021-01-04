import React, { Component,Fragment } from 'react';
import Header from './component/header';
import Content from './component/content';
import Footer from './component/footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default App;