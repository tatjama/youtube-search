import { useState, useEffect } from 'react';
//components
import { SearchBar, Video , SearchingLoader } from '../components';
//styles
import { SearchPageStyles } from './SearchPageStyles';
//hooks
import { useHttp } from '../hooks/useHttp';
//constants
import { urlApi, apiKey, resultsNumber } from '../utils/constants';

const SearchPage = () => {
	const [query, setQuery] = useState('');
	const [data, setData] = useState(null);
	const { isLoading, error, fetching} = useHttp();    
	
	useEffect(() => {
		const url = `${urlApi}/search?part=snippet&maxResults=${resultsNumber}&q=${query}&key=${apiKey}`;
		//const url = `${urlApi}/videos?id=7lCDEYXw3mM&key=${apiKey}&part=snippet,contentDetails,statistics,status`;
		fetching(setData, url);	
  },[ query, fetching])

	return(
		<SearchPageStyles>
			<nav><h2>YouTube API</h2></nav>
			<header>
				<SearchBar setQuery = {setQuery} />						
			</header>
			<div className="list">
				<p className="error">
				{error && `Error: ${error?.code} message: ${error?.errors?.map(error => error.message + " " + error.reason)}`}
				</p>
        {isLoading && <SearchingLoader/>} 
				{ data?.items?.map(item => {
					const id = item.id.videoId ? item.id.videoId : item.id.playlistId ? item.id.playlistId : item.id.channelId
					return <Video id = {id} video = {item} key = {id}/>
				})}
			</div>
		</SearchPageStyles>
	)
}

export default SearchPage;