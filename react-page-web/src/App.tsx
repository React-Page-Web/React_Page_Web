import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import PageReactThemes from './components/pages/PageReactThemes';

function App() {
  return (
    <div>
      <Header />
      <PageReactThemes />
      <Footer />
    </div>
  );
}

export default App;
