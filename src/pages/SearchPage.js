import { useState, useEffect } from 'react';
//components
import { Header, List, SearchingLoader, Module } from '../components';
//hooks
import { useHttp } from '../hooks/useHttp';
//utils
import { urlBase} from '../utils/constants';
//styles
import { SearchPageStyles } from './SearchPageStyles';

const SearchPage = () => {
	const [query, setQuery] = useState('');
  const [type, setType] = useState('channel,playlist,video');
	const [data, setData] = useState(null);
  const [video, setVideo] = useState(null);
  const { isLoading, error, fetching } = useHttp();    
	
  useEffect(() => {
		const url = `${urlBase}&type=${type}&q=${query}`;
		
		fetching(setData, url); 	
  },[ query, fetching, type]);  
  
  const errorText = `Error: ${error?.code} message: ${error?.errors?.map(error => error.message + " " + error.reason)}`; 
  
  return(
		<SearchPageStyles>
      <Header setQuery={setQuery} setType={setType} />
      <p className="error">               
				{error && errorText}
			</p>
      {isLoading && <SearchingLoader/>}    
      <List 
        data={data} 
        setQuery={setQuery} 
        query={query} 
        setData={setData}
        type={type}
        fetching={fetching}
        setVideo={setVideo}
      />    
			{video && <Module video={video} setVideo={setVideo}/>}       
		</SearchPageStyles>
	)
}

export default SearchPage;