import React, {Fragment} from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Filter from '../Menu/Info/Filter';
import Deepinfo from '../Menu/Info/Deepinfo';
  const App = ({match}) => (
 
    <Router>
      <>
      <Route exact path="/" component={ResponsiveDrawer} />
      <Switch>
        <Route exact path="/home/:id" component={Deepinfo} />
        <Route exact path="/main" component={Filter} />
      </Switch>
      </>
    </Router>
    
  );

export default App;

