import React from 'react';
// import { createContext } from 'react';
import PropertyList from './components/PropertyListComponent/PropertyList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyDetails from './components/PropertyDetailsComponent/PropertyDetails';
import UserProvider from './components/PropertyListComponent/UserContext';
import { Fragment } from 'react/cjs/react.production.min';

function App() {
  return (
    
    <div>
     <Routes>
      <React.Fragment>
        <UserProvider>
          <Route exact path='/'>
            <PropertyList />
          </Route>
          <Route exact path='/user/:userId'>
            <PropertyDetails />
          </Route>
        </UserProvider>
        </React.Fragment>
        </Routes>
      </div>
      
    
  );
}
export default App;
