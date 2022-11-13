import { useState, useEffect } from 'react';
//components
import { SearchBar, Pagination, SearchingLoader, Video } from '../components';
//hooks
import { useHttp } from '../hooks/useHttp';
//utils
import { urlApi, apiKey, resultsNumber } from '../utils/constants';
//styles
import { SearchPageStyles } from './SearchPageStyles';

const SearchPage = () => {
	const [query, setQuery] = useState('');
	const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState(null);
  const { isLoading, error, fetching } = useHttp();    
	
	useEffect(() => {
		const url = `${urlApi}/search?part=snippet&maxResults=${resultsNumber}&q=${query}&key=${apiKey}`;
		//const url = `${urlApi}/videos?id=7lCDEYXw3mM&key=${apiKey}&part=snippet,contentDetails,statistics,status`;
		fetching(setData, url); 	
  },[ query, fetching]);

  useEffect(() => {
   const v = data?.items?.slice(0, 10);
   setVideos(v);
  }, [data])

  const handlePageClick = (e) => {
    const nextPageToken = data?.nextPageToken; 
    const prevPageToken = data?.prevPageToken;
    const clickedPage = Number.isNaN(Number(e.target.id)) ? e.target.id : Number(e.target.id);
    const url = `${urlApi}/search?part=snippet&maxResults=${resultsNumber}&q=${query}&key=${apiKey}`;
	      
    (clickedPage === "next 5") ? fetching(setData,`${url}&pageToken=${nextPageToken}`)
      : (clickedPage === "prev 5") ? fetching(setData,`${url}&pageToken=${prevPageToken}`)
      : (clickedPage === 1 && !prevPageToken) ? fetching(setData, url) 
      : setVideos(data?.items?.slice(10 * (clickedPage - 1), 10 * clickedPage))
      
    setPage(Number.isNaN(Number(e.target.id)) ? 1 : Number(e.target.id));    
  }

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
        <Pagination data = {data} handlePageClick = {handlePageClick} nextPage = {page}
        prevToken = {data?.prevPageToken && 'prev token'}  nextToken =  {data?.nextPageToken && 'next token'} />
        {isLoading && <SearchingLoader/>} 
				{ videos?.map(item => {
					const id = item.id.videoId ? item.id.videoId : item.id.playlistId ? item.id.playlistId : item.id.channelId
					return <Video id = {id} video = {item} key = {id}/>
				})}
        <Pagination data = {data} handlePageClick = {handlePageClick} nextPage = {page}
        prevToken = {data?.prevPageToken && 'prev token'}  nextToken =  {data?.nextPageToken && 'next token'} />
         
			</div>              
		</SearchPageStyles>
	)
}

export default SearchPage;