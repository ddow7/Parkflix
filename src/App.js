import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Main from './container/Main'
import Menu1 from './container/Menu1'
import Menu2 from './container/Menu2'
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
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
        <Header />
          <Route exact={true} path="/" component={Main} />
          <Route path="/image" component={Menu1} />
          <Route path="/movie" component={Menu2} />
        <Footer />
    </Router>
    </>
  );
}

export default App;
