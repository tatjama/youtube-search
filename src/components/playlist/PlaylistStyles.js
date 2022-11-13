import styled from 'styled-components'

export const PlaylistStyles = styled.section`
    width: 630px;
    height: 270px;
    padding: 20px 40px;
    margin: 10px;
    color: #3f3f4e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

    article {
      width: 50%;
      height: 100%;
      line-height: 25px;
      padding: 20px 0;
    }

    a, h4 {
      cursor: pointer;
      text-decoration: none;
      color: #21af6f;
      font-weight: bold;
        &:hover {
        color: #15754a;
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

      i {
        font-size: 1000%;
        color: #40bc84;
      }
    }

    @media only screen and (max-width: 768px)  {    
      width: 100%;
      height: 200px;
      
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
  height: 100%;
  flex-direction: column;
  
  .imgContainer, article {
    width: 70%;
  }     
 }

 @media only screen and (max-width: 365px)  {

  .imgContainer, article {
    width: 90%;
  }     
 }
`