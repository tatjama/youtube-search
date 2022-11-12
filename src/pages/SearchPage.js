import React, { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import Video from '../components/video/Video';
import { SearchPageStyles } from './SearchPageStyles';

const SearchPage = () => {
	const [query, setQuery] = useState('');
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	//console.log(query);
	const urlApi = process.env.REACT_APP_YOUTUBE_API_BASE_URL;
	const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

	useEffect(() => {
		const search = async () => {
				try {        
						setIsLoading(true);
						setError(null);
						setData(null);
						const url =  `${urlApi}/search?part=snippet&maxResults=26&q=${query}&key=${apiKey}`;
						//const url = `${urlApi}/videos?id=7lCDEYXw3mM&key=${apiKey}&part=snippet,contentDetails,statistics,status`;
						
						//const url = `${urlApi}/videos?id=XW1aGkzyjQg&key=${apiKey}&part=snippet,contentDetails,statistics,status`;
						
						const response = await fetch(url, {
								method: 'GET',
								headers: {
										'Content-Type': 'application/json'
								}            
						})
						console.log(response.status)
						const data = await response.json();
						console.info(data)

						data.error ? setError(data.error) : setData(data);                

				} catch (error) {
					setError({code: 400, errors:[{message: 'Something went wrong', reason: ''}]});
						console.log(error);
				}
				setIsLoading(false);
				}
		search();
},[ urlApi, apiKey, query])

console.log(error);

//console.log(data);

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
				{ data?.items?.map(item => {
					const id = item.id.videoId ? item.id.videoId : item.id.playlistId ? item.id.playlistId : item.id.channelId
					return <Video id = {id} video = {item} key = {id}/>
				})}
			</div>
		</SearchPageStyles>
	)
}

export default SearchPage;