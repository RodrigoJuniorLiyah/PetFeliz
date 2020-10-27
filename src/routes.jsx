import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Blog from './pages/Blog';
import Contato from './pages/Contato';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/gallery" exact component={Galeria} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/contato" exact component={Contato} />
    </BrowserRouter>
  );
}

export default Routes;