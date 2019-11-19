import React, {Fragment} from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Copyright from './Signln';
  const App = ({match}) => (
 
    <Router>
      <>
      <Route exact path="/" component={Copyright} />
      <Switch>
        <Route exact path="/home" component={ResponsiveDrawer} />
      </Switch>
      </>
    </Router>
    
  );

export default App;

