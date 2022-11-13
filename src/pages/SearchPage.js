import { useState, useEffect } from 'react';
//components
import { Channel, SearchBar, Pagination, SearchingLoader, Video, Playlist, Select } from '../components';
//hooks
import { useHttp } from '../hooks/useHttp';
//utils
import { urlBase, typesList } from '../utils/constants';
//styles
import { SearchPageStyles } from './SearchPageStyles';

const SearchPage = () => {
	const [query, setQuery] = useState('');
  const [type, setType] = useState('channel,playlist,video');
	const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState(null);
  const { isLoading, error, fetching } = useHttp();    
	
  useEffect(() => {
		const url = `${urlBase}&type=${type}&q=${query}`;
		//const url = `${urlApi}/videos?id=7lCDEYXw3mM&key=${apiKey}&part=snippet,contentDetails,statistics,status`;
		fetching(setData, url); 	
  },[ query, fetching, type]);

  useEffect(() => {
   const v = data?.items?.slice(0, 10);
   setVideos(v);
  }, [data])

  const handlePageClick = (e) => {
    const nextPageToken = data?.nextPageToken; 
    const prevPageToken = data?.prevPageToken;
    const clickedPage = Number.isNaN(Number(e.target.id)) ? e.target.id : Number(e.target.id);
    const url = `${urlBase}&type=${type}&q=${query}`;
	      
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
        <div className="selectContainer">
          <Select optionsList = {typesList} setOption = {setType} name = "types"/>
        </div>			
			</header>
			<div className="list">
				<p className="error">               
				{error && `Error: ${error?.code} message: ${error?.errors?.map(error => error.message + " " + error.reason)}`}
				</p>
        <Pagination data = {data} handlePageClick = {handlePageClick} nextPage = {page}
        prevToken = {data?.prevPageToken && 'prev token'}  nextToken =  {data?.nextPageToken && 'next token'} />
        {isLoading && <SearchingLoader/>} 
				{ videos?.map(item => (item.id.kind === 'youtube#channel') 
          ? <Channel id = {item.id.channelId} video = {item} key = {item.id.channelId}/>
          : (item.id.kind === 'youtube#video')
          ? <Video id = {item.id.videoId} video = {item} key = {item.id.videoId}/>
          : <Playlist id= {item.id.playlistId} setQuery = {setQuery} video = {item} key = {item.id.playlistId} />          
				)}
        <Pagination data = {data} handlePageClick = {handlePageClick} nextPage = {page}
        prevToken = {data?.prevPageToken && 'prev token'}  nextToken =  {data?.nextPageToken && 'next token'} />         
			</div>              
		</SearchPageStyles>
	)
}

export default SearchPage;