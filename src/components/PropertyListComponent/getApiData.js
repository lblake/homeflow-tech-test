import React from 'react'
import axios from 'axios';

export default async function getApiData() {
  return await axios.get(`/api/properties?location=brighton'`);
}
