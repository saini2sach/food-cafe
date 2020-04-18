import React, { Component } from 'react';
import s from './App.module.scss';
import Nav from '../components/Nav';
import Main from '../components/Main';

export default class App extends Component {

  componentDidMount() {
    this.props.getProductList();
  }

  render() {
    const { productData } = this.props;
    return (
      <div className={s.app}>
        <header>
          <h1>{productData.heading}</h1>
          <p>{productData.description}</p>
        </header>
        <Nav />
        <Main />
      </div>
    )
  }
}
