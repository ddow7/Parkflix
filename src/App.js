import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Main from './container/Main'
import Menu1 from './container/Menu1'
import Header from './component/Header'
import Footer from './component/Footer';

//전체 스타일(배경)
const GlobalStyle = createGlobalStyle`
  body {
    background: #121212;
    overflow-x:hidden;
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
