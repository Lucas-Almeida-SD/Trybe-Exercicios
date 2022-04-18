import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisteredCustomers from './pages/RegisteredCustomers';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" render={ (props) => <Login { ...props } /> } />
        <Route exact path={"/registered_customers"} component={ RegisteredCustomers } />
        <Route exact path="/register" component={ Register }/>
      </Switch>
    </div>
  );
}

export default App;
