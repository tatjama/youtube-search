//components
import  CommentingLoader  from '../components/loaders/CommentingLoader';
//styles
import { LoadingStyles } from '../components/loaders/LoadingStyles';

const NoMatch = () => {
    return(
        <LoadingStyles>
          <CommentingLoader/>
          <div>
            <h2>oops!</h2>
            <p>the page doesn't seem to exist </p>
          </div>
        </LoadingStyles>
    )
}

export default NoMatch;