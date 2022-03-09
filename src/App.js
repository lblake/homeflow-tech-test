import React from 'react';
import PropertyList from './components/PropertyListComponent/PropertyList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyDetails from './components/PropertyDetailsComponent/PropertyDetails';
import UserProvider from './components/PropertyListComponent/UserContext';

function App() {
  return (
  <Router>
    <UserProvider>
      <Routes>
          <Route path='/' element={<PropertyList />}/>
          <Route path='/user/:userId' element={<PropertyDetails />}/>
      </Routes>
    </UserProvider>
  </Router>
  );
}
export default App;
