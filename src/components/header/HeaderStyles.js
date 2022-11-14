import styled from 'styled-components'

export const HeaderStyles = styled.div`
  nav, header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  nav {    
    padding: 20px 40px;
    align-items: center;
    color: #224abf;
  }

  header {
    width: 700px;
    padding: 0 40px;
    margin: 0 auto;
  }

@media only screen and (max-width: 768px)  {
    header {
      width: 100%;
    }
  }

  @media only screen and (max-width: 450px)  {
    nav {
      padding: 10px 20px;
      font-size: 12px;
    }

    header {
      padding: 0 20px;
    }

 }
`