import styled from 'styled-components'

export const CardStyles = styled.section`
  width: 630px;
  padding: 20px 40px;
  margin: 10px;
  color: #3f3f4e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  article {
    width: 50%;
    height: 100%;
    line-height: 25px;
    padding: 20px 0;
  }

  a, h4 {
    cursor: pointer;
    text-decoration: none;
    color: #5874c4;
    font-weight: bold;
      &:hover {
      color: #3368f5;
    }
  }

  p {
    font-size: 14px;
  }

  span {
    font-weight: bold;
  }
  .imgContainer {
    width: 45%;
    height: 100%;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .more {
    color: #3368f5 ;
    position: absolute ;
    bottom: 0;
    left: 0;
    padding: 5px;
    font-size: 8px;
    line-height: 20px;
    border-radius:50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #3368f5 ;
      color: white;      
    }
  }

  @media only screen and (max-width: 768px)  {    
    width: 100%;
    
      article {
        line-height: 14px;
      }     

      a, h4 {
        line-height: 20px;
        font-size: 14px;
      }

      p {
        font-size: 10px;
      }         
  }

  @media only screen and (max-width: 500px)  {   
    flex-direction: column;
    
    .imgContainer, article {
      width: 80%;
    }     
 }

 @media only screen and (max-width: 365px)  {

  .imgContainer, article {
    width: 90%;
  }     
 }
`