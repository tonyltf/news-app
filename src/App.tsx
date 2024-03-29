import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import './App.scss';
import Cards from './components/Cards/';

class App extends React.Component {
  render(): ReactElement {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>News App</title>
          <meta name="description" content="A simple news app" />
          <meta name="viewport" content="width=device-width" />
          <meta property="og:title" content="News App" />
          <meta property="og:type" content="article" />
          <link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-1024x1024.png" />
        </Helmet>
        <Header title="US News" />
        <Cards />
      </div>
    );
  }
}

export default App;
