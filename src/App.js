import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TinaProvider, TinaCMS } from 'tinacms'

import PageContent from './PageContent'
import Menu from './Menu'

function App() {
  const cms = new TinaCMS({
    sidebar: true,
    enabled: true
  })

  // setTimeout(cms.enable, 1)

  return (
    <div className="App">
      <TinaProvider cms={cms}>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/">
              <PageContent />
            </Route>
          </Switch>
        </Router>
      </TinaProvider>
    </div>
  );
}

export default App;
