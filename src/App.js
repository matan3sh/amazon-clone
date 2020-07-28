import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AmazonApp from './components/pages/AmazonApp';
import Checkout from './components/pages/Checkout';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

import { Utils } from './service/Utils';
import { useStateValue } from './context/StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const basket = Utils.loadFromStorage('basket')
      ? Utils.loadFromStorage('basket')
      : [];
    dispatch({
      type: 'LOAD_BASKET',
      payload: basket
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/' component={AmazonApp} />
      </Switch>
    </Router>
  );
}

export default App;
