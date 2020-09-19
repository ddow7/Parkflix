import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Main from './container/Main'
import Menu1 from './container/Menu1'
import Header from './component/Header'
import Footer from './component/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    background: #000000;
  }
  p{
    color : white;
  }
`;

function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
        <Header />
          <Route exact path="/" component={Main} />
          <Route path="/menu" component={Menu1} />
        <Footer />
        
    </Router>
    </>
  );
}

export default App;
