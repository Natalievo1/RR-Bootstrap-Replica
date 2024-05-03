import React from 'react';
import BackgroundWithForm from './components/BackGroundForm';
import NavbarComponent from './components/NavbarComponent';
import StoreListings from './components/StoreListings';

function App() {
  return (
    <div>
      <NavbarComponent />
      <BackgroundWithForm />
      <StoreListings />
    </div>
  );
}

export default App;

