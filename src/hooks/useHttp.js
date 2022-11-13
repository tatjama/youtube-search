import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetching = useCallback ( async (setFetchResponse, url) => {
      setIsLoading(true);
      setError(null);
 
      try {
        const response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }            
        });
        const data = await response.json();
        response.ok ? setFetchResponse(data) : setError(data.error) ; 
      } catch (error) {
        setError({code: 400, errors:[{message: 'Something went wrong', reason: ''}]});
      }

      setIsLoading(false);
  },[])
  
  return {isLoading, error, fetching, setError}
}

//MOCK
/*
import { response, response2 } from '../utils/constants';

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetching = useCallback ( async (setFetchResponse, url) => {
      setIsLoading(true);
      setError(null);
      console.log('hook')
        const data = url === "2" ? response2 : response
        console.log(data)
        response ? setFetchResponse(data) : setError(data.error) ; 
      
      setIsLoading(false);
  },[])
  
  return {isLoading, error, fetching, setError}
}
*/