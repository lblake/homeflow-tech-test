import React from 'react';
// import { createContext } from 'react';
import PropertyList from './components/PropertyListComponent/PropertyList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyDetails from './components/PropertyDetailsComponent/PropertyDetails';
import UserProvider from './components/PropertyListComponent/UserContext';
import { Fragment } from 'react/cjs/react.production.min';

function App() {
  return (
    // <div>
      <Router>
    <Routes>
      
          <Route path='/' element={
          <UserProvider>
          <PropertyList />
          </UserProvider>
          }>

          <Route path='/user/:userId' element={<PropertyDetails />}/>
            
          </Route>
        
    </Routes>
    </Router>
    // </div>
  );
}
export default App;
