//constants
import { urlYT } from '../../utils/constants';
//styles
import { CardStyles } from './CardStyles';

const Channel = ({ id, video }) => {
    
  const channelLink = `${urlYT}/channel/${video.snippet.channelId}`;
  
  return(
    <CardStyles id = {id}>                    
      <article>
        <a target="_blank" rel="noopener noreferrer" href={channelLink}>{video.snippet.title}</a>
        <p><span> Year: </span> {video.snippet.publishedAt}</p>
        <p><span> Description: </span>{video.snippet.description}</p>
      </article>
      <div className="imgContainer">
        <a target="_blank" rel="noopener noreferrer" href={channelLink}>
          <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
        </a>                
      </div>            
    </CardStyles>
  )
}

export default Channel;