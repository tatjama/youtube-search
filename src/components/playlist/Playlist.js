//styles
import { PlaylistStyles } from './PlaylistStyles';

const Playlist = ({ id, video, setQuery}) => {
  const channelLink = `https://youtube.com/channel/${video.snippet.channelId}`;
  
  return(
    <PlaylistStyles id = {id}>                    
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
    </PlaylistStyles>
  )
}

export default Playlist;