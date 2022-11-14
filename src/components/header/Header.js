//components
import { SearchBar, Select } from '../';
//constants
import { typesList } from '../../utils/constants';
//styles
import { HeaderStyles } from './HeaderStyles';

const Header = ({ setQuery, setType }) => {
  return(
    <HeaderStyles>
      <nav><h2>YouTube API</h2></nav>
      <header>
        <SearchBar setQuery = {setQuery} />			
        <div className="selectContainer">
          <Select optionsList = {typesList} setOption = {setType} name = "types"/>
        </div>			
      </header>    
    </HeaderStyles>
  )
}

export default Header;