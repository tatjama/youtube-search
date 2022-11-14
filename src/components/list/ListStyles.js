import styled from 'styled-components'

export const ListStyles = styled.div`
  
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 95%;
    margin: 0 auto 10px auto;  
  
  @media only screen and (max-width: 450px)  {    
      flex-direction: column;    
  }
`