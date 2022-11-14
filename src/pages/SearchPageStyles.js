import styled from 'styled-components'

export const SearchPageStyles = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;  
  
  .error {
    color: red;
    line-height: 20px;
    height: 20px;
    width: 100%;
    font-size: 14px;
    text-align: center;
  }

  @media only screen and (max-width: 450px)  {
    .error {
      font-size: 8px;
      overflow: hidden;
    }      
 }
`