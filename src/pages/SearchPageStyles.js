import styled from 'styled-components'

export const SearchPageStyles = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
  
  nav, header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  nav {    
    padding: 20px 40px;
    align-items: center;
    color: #21af6f;
  }

  header {
    width: 700px;
    padding: 0 40px;
    margin: 0 auto;
  }

  .selectContainer {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .error {
    color: red;
    line-height: 20px;
    height: 20px;
    width: 100%;
    font-size: 14px;
    text-align: center;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 95%;
    margin: 0 auto 10px auto;
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
        color: #21af6f;
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
    header {
      width: 100%;
    }
    .selectContainer {
      width: 35%;
    }
    .module {
      width: 75%;
    }
 }


  @media only screen and (max-width: 450px)  {
    nav {
      padding: 10px 20px;
    }

    header {
      padding: 0 20px;
    }

    nav, .error {
      font-size: 12px;
    }
    
    .list {
      flex-direction: column;    
    } 
      
    .background .close h1 {
      padding: 20px;
    }
 }
`