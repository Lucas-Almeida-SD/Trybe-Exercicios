import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FormDataDisplay from './pages/FormDataDisplay';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ (props) => <PersonalForm { ...props } /> } />
            <Route
              path="/professionalForm"
              render={ (props) => <ProfessionalForm { ...props } /> }
            />
            <Route path="/formDisplay" component={ FormDataDisplay } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
