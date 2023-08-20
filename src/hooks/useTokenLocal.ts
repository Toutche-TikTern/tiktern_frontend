// @ts-nocheck
import { useEffect, useState } from 'react';

const useTokenLocal = () => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('token')) || null
  );

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return [token, setToken];
};

export default useTokenLocal;
