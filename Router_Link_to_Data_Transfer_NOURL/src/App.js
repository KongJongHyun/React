import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main1 from './Main';
import Filter from './Menu/Info/Filter';
import Deepinfo from './Menu/Info/Deepinfo';
  const App = ({match}) => (

    <div>
    <Router>
      <Route exact path="/" component={Main1} />
      <Switch>
        <Route exact path="/home/:id" component={Deepinfo} />
        <Route exact path="/main" component={Filter} />
      </Switch>
    </Router>
    </div>
  );

export default App;

