import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  min-height: 100%;
  margin-top:1vh;
  display: grid;
  grid-template-columns: 1.2fr 8fr;
`;

export const SideBox = styled.div`
  background: linear-gradient(
    328deg,
    rgba(29, 116, 110, 1) 3%,
    rgba(25, 167, 113, 1) 99%
  );
  position:sticky;
  top:0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 25%;
  }
`;

export const PlantBox = styled.div`
  position: relative;
  margin-left:1em;
  margin: 0 auto;
  padding: 2vh;
  width: 98%;
  height: 100%;
  display: flex;
  align-items:center;
  flex-direction: column;
  background-color: white;
  @media (max-width: 568px) {
    margin-top: 5vh;
    padding-left: 1vh;
  }
`;

export const Input = styled.input`
  max-width: 97%;
  

`;

export const Category = styled.h5`
  font-size: 2em;
  padding: 3.5vh 0.5vh;
  margin: 0 auto;
  color: #f0ffff;
  border-top: 1.8px solid #f0ffff;
  text-align: center;
  width: 100%;
  :nth-child(5) {
    border-bottom: 1.8px solid white;
  }
  :hover {
    background-color: #f0ffff;
    color: rgba(41, 94, 106, 1);
    cursor: pointer;
  }
  @media (max-width: 525px) {
    font-size: 1rem;
  }
`;
