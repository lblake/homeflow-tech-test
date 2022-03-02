import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'


const element = document.getElementById('app')
ReactDOM.render(<App/>, element)

// fetch('/api/properties?location=brighton')
//   .then(response => response.json())
//   .then((json) => {
//     console.log(json.result.properties.elements);
//     document.querySelector('#app').innerHTML = '<p>Check the JS console for some data...</p>';
//   })
//   .catch((err) => {
//     console.error(err);
//     document.querySelector('#app').innerHTML = '<p>Something went wrong. Check the console for details.</p>';
//   });
