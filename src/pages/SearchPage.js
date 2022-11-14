import { useState, useEffect } from 'react';
//components
import { Channel, Header, Pagination, SearchingLoader, Video, Playlist, Details } from '../components';
//hooks
import { useHttp } from '../hooks/useHttp';
//utils
import { urlBase, urlApi, apiKey } from '../utils/constants';
//styles
import { SearchPageStyles } from './SearchPageStyles';

const SearchPage = () => {
	const [query, setQuery] = useState('');
  const [type, setType] = useState('channel,playlist,video');
	const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState(null);
  const { isLoading, error, fetching } = useHttp();    
	
  useEffect(() => {
		const url = `${urlBase}&type=${type}&q=${query}`;
		
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

  const handleClickVideo = (e) => {    
    const urlMovie = `${urlApi}/videos?id=${e.currentTarget.id}&key=${apiKey}&part=snippet,contentDetails,statistics,status`
    fetching( setVideo, urlMovie);
  }

  const errorText = `Error: ${error?.code} message: ${error?.errors?.map(error => error.message + " " + error.reason)}`; 
  
  return(
		<SearchPageStyles>
      <Header setQuery={setQuery} setType={setType} />
      <p className="error">               
				{error && errorText}
			</p>
      {isLoading && <SearchingLoader/>}        
			<div className="list">
				<Pagination data = {data} handlePageClick = {handlePageClick} nextPage = {page}
        prevToken = {data?.prevPageToken && 'prev token'}  nextToken =  {data?.nextPageToken && 'next token'} />
         
				{ videos?.map(item => (item.id.kind === 'youtube#channel') 
          ? <Channel id = {item.id.channelId} video = {item} key = {item.id.channelId}/>
          : (item.id.kind === 'youtube#video')
          ? <Video id = {item.id.videoId} video = {item} key = {item.id.videoId} handleClickVideo = {handleClickVideo}/>
          : <Playlist id= {item.id.playlistId} setQuery = {setQuery} video = {item} key = {item.id.playlistId} />          
				)}
        <Pagination data = {data} handlePageClick = {handlePageClick} nextPage = {page}
        prevToken = {data?.prevPageToken && 'prev token'}  nextToken =  {data?.nextPageToken && 'next token'} />         
			</div>       
      {video && <div className="background">
                  <div className="close" onClick ={ () => setVideo(null) }>
                    <h1>x</h1>
                  </div>
                  <div className="module"> 
                    <Details video = {video?.items[0]} />
                  </div>
                </div>}       
		</SearchPageStyles>
	)
}

export default SearchPage;