// import React from 'react'
import axios from 'axios';
import "regenerator-runtime"

export default async function getApiData() {
  return await axios.get(`/api/properties?location=brighton'`);
}
