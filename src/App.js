import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AmazonApp from './components/pages/AmazonApp';
import Checkout from './components/pages/Checkout';
import Auth from './components/pages/Auth';

import { Utils } from './service/Utils';
import { useStateValue } from './context/StateProvider';
import { auth } from './config/firebase';

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const basketFromStorage = Utils.loadFromStorage('basket')
      ? Utils.loadFromStorage('basket')
      : [];
    dispatch({
      type: 'LOAD_BASKET',
      payload: basketFromStorage
    });
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          payload: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          payload: null
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/' component={AmazonApp} />
      </Switch>
    </Router>
  );
}

export default App;
