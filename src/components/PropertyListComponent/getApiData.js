// import React from 'react'
// import axios from 'axios';
import "regenerator-runtime"

export default async function getApiData() {
  // return await axios.get(`/api/properties?location=brighton'`);
  return fetch('/api/properties?location=brighton')
  .then(response => response.json())
  .then(data => data.result.properties.elements)
}
