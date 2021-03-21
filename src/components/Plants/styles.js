import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
`;

export const SideBox = styled.div`
 background: linear-gradient(328deg, rgba(29,116,110,1) 3%, rgba(25,167,113,1) 99%);
  margin-right: 2vh;  
  max-width: 15%;
  width:100%;
  height: 100%;
  min-height:95vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 25%;
  }  
`;

export const PlantBox = styled.div`
  margin-top: 3vh;
  padding-left:2vh;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  @media (max-width: 568px){
    margin-top:5vh;
    padding-left:1vh;
  }
`;

export const Input = styled.input`
  max-width: 95%;  
`;

export const Category = styled.h5`
  padding: 3.5vh;
  margin: 0 auto;
  color: #F0FFFF;
  border-top: 1.8px solid #F0FFFF;
  text-align: center;
  width: 100%;
  :nth-child(4) {
    border-bottom: 1.8px solid white;
  }
  :hover{
      background-color:#F0FFFF;
      color: rgba(41, 94, 106, 1);
      cursor:pointer;
  }   
  @media (max-width: 525px) {
    font-size:1.0rem;
  } 
`;
