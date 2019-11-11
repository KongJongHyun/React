import React, {Fragment} from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SimpleExpansionPanel from './SimpleExpansionPanel';
import Copyright from './Signln';


  const App = () => (
 
    <Router>
      <>
      <Route exact path="/" component={Copyright} />
      <Switch>
        <Route exact path="/home" component={ResponsiveDrawer} />
        <Route exact path="/main" component={SimpleExpansionPanel} />
      </Switch>
      </>
    </Router>
    
  );

export default App;
