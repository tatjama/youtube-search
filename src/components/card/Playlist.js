//constants
import { urlYT } from '../../utils/constants';
//styles
import { CardStyles } from './CardStyles';

const Playlist = ({ id, video, setQuery}) => {
  const channelLink = `${urlYT}/channel/${video.snippet.channelId}`;
  
  return(
    <CardStyles id = {id}>                    
      <article>
        <h4 onClick={() =>  setQuery(id)}>{video.snippet.title}</h4>
        <p><span> Channel: </span> 
          <a target="_blank" rel="noopener noreferrer" href={channelLink}> {video.snippet.channelTitle}</a>
          </p>
        <p><span> Year: </span> {video.snippet.publishedAt}</p>
        <p><span> Description: </span>{video.snippet.description}</p>
      </article>
      <div className="imgContainer" onClick={() =>  setQuery(id)} >
        <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} /> 
      </div>            
    </CardStyles>
  )
}

export default Playlist;