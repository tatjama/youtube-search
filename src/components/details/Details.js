//styles
import { DetailsStyles } from './DetailsStyles';

const Details = ({ video }) => {

  const videoLink = `https://youtube.com/watch?v=${video.id}`;
  const channelLink = `https://youtube.com/channel/${video.snippet.channelId}`;
  
  return(
    <DetailsStyles id = {video.id} >       
      <a target="_blank" rel="noopener noreferrer" href={videoLink}>{video.snippet.title}</a>
      <div className="details">             
        <article>
        <p><span> Channel: </span> 
          <a target="_blank" rel="noopener noreferrer" href={channelLink}> {video.snippet.channelTitle}</a>
          </p>
        <p><span> Year: </span> {video.snippet.publishedAt}</p>
        <p><span> Comments: </span> {video.statistics.commentCount}</p>
        <p><span> Likes: </span> {video.statistics.likeCount}</p>
        <p><span> Views: </span> {video.statistics.viewCount}</p>        
        </article>
        <div className="imgContainer">
        <a target="_blank" rel="noopener noreferrer" href={videoLink}>
          <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
        </a>                 
        </div>
      </div>
      <p ><span> Description: </span>{video.snippet.description}</p>
    </DetailsStyles>
  )
}

export default Details;