//styles
import { VideoStyles } from './VideoStyles';

const Video = ({ id, video, handleClickVideo }) => {
  const videoLink = `https://youtube.com/watch?v=${id}`;
  const channelLink = `https://youtube.com/channel/${video.snippet.channelId}`;
  
  return(
    <VideoStyles >                    
      <article>
        <a target="_blank" rel="noopener noreferrer" href={videoLink}>{video.snippet.title}</a>
        <p><span> Channel: </span> 
          <a target="_blank" rel="noopener noreferrer" href={channelLink}> {video.snippet.channelTitle}</a>
          </p>
        <p><span> Year: </span> {video.snippet.publishedAt}</p>
        <p><span> Description: </span>{video.snippet.description}</p>
      </article>
      <div className="imgContainer">
        <a target="_blank" rel="noopener noreferrer" href={videoLink}>
          <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
        </a>                 
      </div>
      <p id={id} onClick={handleClickVideo} className="more">more...</p>
    </VideoStyles>
  )
}

export default Video;