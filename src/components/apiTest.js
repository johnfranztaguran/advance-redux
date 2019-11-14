import React, { useState, useEffect } from 'react';
import WPRequest from './endpoints/request';

const wp_req = new WPRequest();

const AppTest = () => {
  const [apiItem, setApiItem] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const userDetails = await wp_req.apiTestFetch();
      setApiItem(userDetails);
    } catch (err) {
      console.error('Error while fetching data:', err);
    };
  }

  console.log('===>', apiItem)

  return (
    <div>Test API</div>
  )
}

export default AppTest;
