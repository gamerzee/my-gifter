/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useContext } from 'react';
import authContext from '../contexts/authContext';

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;
