import { useState, useEffect } from 'react';
//components
import { Pagination, Channel, Video, Playlist } from '../';
//styles
import { ListStyles } from './ListStyles';

const List = ({ data, setQuery, query, setData, type, fetching, setVideo }) => {
  const [videos, setVideos] = useState(null);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    const v = data?.items?.slice(0, 10);
    setVideos(v);
   }, [data])
  
  return(
    <ListStyles className="list">
      <Pagination 
        data={data} 
        setData={setData} 
        fetching={fetching} 
        setVideos={setVideos} 
        query={query} 
        type={type}
        page={page}
        setPage={setPage}
      />        
      { videos?.map(item => (item.id.kind === 'youtube#channel') 
        ? <Channel id={item.id.channelId} video={item} key={item.id.channelId}/>
        : (item.id.kind === 'youtube#video')
        ? <Video id={item.id.videoId} video={item} setVideo={setVideo} key={item.id.videoId} fetching={fetching}/>
        : <Playlist id={item.id.playlistId} setQuery={setQuery} video={item} key={item.id.playlistId} />          
      )}
      <Pagination 
        data = {data} 
        setData={setData} 
        fetching={fetching} 
        setVideos={setVideos} 
        query={query} 
        type={type}
        page={page}
        setPage={setPage}
      />
      </ListStyles>      
  )
}

export default List