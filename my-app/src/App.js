import React from 'react';
import './styles/App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './component/Contact/Contact';
import Navbar from './component/Navbar';
import { provider, Provider } from 'react-redux';
import store from './store';
import Addcontact from './component/Contact/Addcontact';
import Editcontact from './component/Contact/Editcontact';
const App = () => {
  return (
    <>
    <Provider store ={store}>
    <Router>
      <div className="App">
      <Navbar />
      <div className ="container">
        <div className = "py-3">
          <Switch>
            <Route exact path = "/" component ={Contact}/>
            <Route exact path = "/contact/add" component ={Addcontact}/>
            <Route exact path = "/contact/edit/:id" component ={Editcontact}/>

          </Switch>
        </div>
      </div>
    </div>
    </Router>
    </Provider>
    </>
  );
}
export default App;
