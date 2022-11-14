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

  .background {
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    position: absolute;
    top: 0;
    z-index: 10;
    .close {
      width: 100%;
      margin-bottom: 20px;
      z-index: 15;
      text-align: right;      
      h1 {
        padding: 40px;
        color: #3368f5;
        cursor: pointer;
        :hover {
          color: red;
        }
      }
    }
  }
  .module {
    position: absolute;
    background-color: white;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 768px)  {
   
    .module {
      width: 75%;
    }
 }


  @media only screen and (max-width: 450px)  {
    .error {
      font-size: 8px;
      overflow: hidden;
    }
      
    .background .close h1 {
      padding: 20px;
    }
 }
`