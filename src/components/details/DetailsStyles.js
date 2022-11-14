import styled from 'styled-components'

export const DetailsStyles = styled.section`
  padding: 20px 40px;
  margin: 10px auto;
  color: #3f3f4e;
    
  .details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin: 20px auto;
    line-height: 18px;
  }
  
  article {
    width: 50%;
    height: 100%;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: #5874c4;
    font-weight: bold;
      &:hover {
      color: #3368f5;
    }
  }

  p {
    font-size: 12px;
  }

  span {
    font-weight: bold;
  }

  .imgContainer {
    width: 47%;
    height: 100%;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media only screen and (max-width: 768px)  {    
    
    article {
      line-height: 14px;
    }     

    a {
      line-height: 20px;
      font-size: 14px;
    }

    p {
      font-size: 10px;
      overflow: hidden;
    }         
 }

 @media only screen and (max-width: 500px)  {   
  
  .details {
    flex-direction: column;
  } 
  
  a {
    font-size: 12px;
  }
  
  .imgContainer, article {
    width: 100%;
  }     
 }

`