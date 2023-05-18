import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function useCategories () {
  const [categories, setCategories] = useState([]);

  useEffect( () => {
     axios.get('http://localhost:5000/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return {categories};
};
