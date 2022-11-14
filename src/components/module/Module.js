//components
import { Details } from '..';
//styles
import { ModuleStyles } from './ModuleStyles';

const Module = ({ video, setVideo }) => {
  return(
    <ModuleStyles className="background">
      <div className="close" onClick ={ () => setVideo(null) }>
        <h1>x</h1>
      </div>
      <div className="module"> 
        <Details video = {video?.items[0]} />
      </div>
    </ModuleStyles>
  )
}

export default Module