import React, { Component } from 'react';
import './app.css';

import Footer from './components/Footer';
import Header from './components/Header';

import CartContainer from './container/CartContainer';
import MessageContainer from './container/MessageContainer';
import ProductsContainer from './container/ProductsContainer';

class App extends Component {
  render() {
    return (
      <div className='abc'>
        {/* Header */}
        <Header />
        <main id='mainContainer'>
          <div className='container'>
            {/* Products */}
            <ProductsContainer />
            {/* Message */}
            <MessageContainer />
            {/* Cart */}
            <CartContainer />
          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
