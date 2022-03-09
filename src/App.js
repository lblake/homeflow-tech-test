import React from 'react';
import PropertyList from './components/PropertyListComponent/PropertyList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyDetails from './components/PropertyDetailsComponent/PropertyDetails';
import UserProvider from './components/PropertyListComponent/UserContext';

function App() {
  return (
    <Router>
    <Routes>
      
          <Route path='/' element={
          <UserProvider>
          <PropertyList />
          </UserProvider>
          }>
          </Route>

          <Route path='/user/:userId' element={<PropertyDetails />}/>
                  
        
    </Routes>
    </Router>
  );
}
export default App;
