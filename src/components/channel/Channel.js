//styles
import { ChannelStyles } from './ChannelStyles';

const Channel = ({ id, video }) => {
    
  const channelLink = `https://youtube.com/channel/${video.snippet.channelId}`;
  
  return(
    <ChannelStyles id = {id}>                    
      <article>
        <a target="_blank" rel="noopener noreferrer" href={channelLink}>{video.snippet.title}</a>
        <p><span> Year: </span> {video.snippet.publishedAt}</p>
        <p><span> Description: </span>{video.snippet.description}</p>
      </article>
      <div className="imgContainer">
          <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />                
      </div>            
    </ChannelStyles>
  )
}

export default Channel;