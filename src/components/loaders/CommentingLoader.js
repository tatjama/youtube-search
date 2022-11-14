import { Comment } from 'react-loader-spinner';

const CommentingLoader = () => {
      return( 
        <Comment
            visible={true}
            height="80"
            width="80"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#F4442E"
        />
      )
}

export default CommentingLoader;