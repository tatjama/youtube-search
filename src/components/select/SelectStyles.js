import styled from "styled-components";

export const SelectStyles = styled.select`
    width: 100%;
    height: 40px;
    padding: 10px 40px;
    outline: none;    
    border: 2px solid transparent;
    background-color: #f5f7ff;
    border-bottom: 2px solid #224abf;
    ::placeholder {
        color: rgb(200, 200, 200);
    }  

    @media only screen and (max-width: 768px)  {
        padding: 10px 20px;
    }    
`