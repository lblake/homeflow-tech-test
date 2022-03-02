import React, { useEffect, useState } from 'react';
import { WebpackOptionsApply } from 'webpack';

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('/api/properties?location=brighton')
      .then((response) => response.json())
      .then((json) => {
        setProperties(json.result.properties.elements);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log('My api values');
  console.log(properties);

  return <div>App</div>;
}

export default App;
