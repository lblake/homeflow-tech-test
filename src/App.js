import React from 'react';
// import { createContext } from 'react';
import PropertyList from './components/PropertyListComponent/PropertyList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropertyDetails from './components/PropertyDetailsComponent/PropertyDetails';
import UserProvider from './components/PropertyListComponent/UserContext';

function App() {
  return (
    <Router>
      <div>
        <UserProvider>
          <Route exact path='/'>
            <PropertyList />
          </Route>
          <Route exact path='/user/:userId'>
            <PropertyDetails />
          </Route>
        </UserProvider>
      </div>
    </Router>
  );
}
export default App;
