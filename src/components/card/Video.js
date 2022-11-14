//constants
import { urlYT, urlApi, apiKey } from '../../utils/constants';
//styles
import { CardStyles } from './CardStyles';

const Video = ({ id, video, fetching, setVideo }) => {
  const videoLink = `${urlYT}/watch?v=${id}`;
  const channelLink = `${urlYT}/channel/${video.snippet.channelId}`;

  const handleClickVideo = (e) => {    
    const urlMovie = `${urlApi}/videos?id=${e.currentTarget.id}&key=${apiKey}&part=snippet,contentDetails,statistics,status`
    fetching( setVideo, urlMovie);
  }

  return(
    <CardStyles >                    
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
    </CardStyles>
  )
}

export default Video;