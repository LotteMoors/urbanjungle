import styled from "styled-components";

export const Full = styled.div`
  width: 100%;
  height: 100%;
  margin: 4em auto;
  background-color: #ffe194;
`;

export const Main = styled.div`
  background-color: #ffe194;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const PlantBox = styled.div`
  margin: 1em auto;
  width: 90%;
  min-height: 10vh;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding:0.7em;
  height: 25vh;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {   
    flex-flow: column;
    margin: 1em auto;
  }
`;

export const TitleBox = styled.div`
  min-width: 25%;
  display: flex;
  
`;
export const Title = styled.h1`
text-align: left;
  color: black;
  font-weight: 500;
  z-index: 0;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    position: relative;
  }
`;

export const Button = styled.button`
  min-width: 8em;
  max-width: 18em;
  width: 100%;
  font-size: 2.3em;
  font-weight: 300;
  padding-right: 0.5em;
  font-family: "Poppins", sans-serif;
  z-index: 1;
  border: none;
  border-radius: 5px;
  height: 1.8em;
  @media (max-width: 768px) {
    z-index: 0;
  }
  &.waves-effect {
    transition: 0.2s ease out;
    background-color: #164f26;
    color: #faf3de;
  }
`;

export const List = styled.ul`
  width: 8em;
  border: none;
  z-index: 1;
`;

export const Category = styled.h3`
  font-size: 1.9em;
  padding: 3.5vh 0.5vh;
  background-color: #063911;
  margin: 0 auto;
  color: #faf7e0;
  text-align: center;
  :hover {
    background-color: #f0ffff;
    color: rgba(41, 94, 106, 1);
    cursor: pointer;
  }
  @media (max-width: 525px) {
    padding: 1.2em;
    margin: 0 auto;
    width: 100%;
    height: 3.5em;
    font-size: 1.6em;
    :nth-child(odd) {
      border-right: 1px solid white;
    }
    :nth-child(4) {
      border-bottom: 1px solid white;
    }
  }
`;

export const SearchContainer = styled.div`
  width: 99%;
  padding-top: 1.7em;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: 17vh;
  background: #ffe194;
  align-items: center;
  @media (max-width: 650px) {
    width: 90%;
  }
`;
export const SearchBox = styled.nav`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: 10vh;
  background: white;
  align-items: center;
  @media (max-width: 650px) {
    width: 90%;
  }
`;
export const SearchImg = styled.img`
  margin: 0em 0.7em;
  width: 2.6em;
  height: 2.5em;
  align-self: center;
`;
export const Input = styled.input`
  width: 100%;
  &.search-bar[type="text"] {
    margin: 0 0.7em;
    width: 89%;
    height: 2.1em;
    font-size: 1.3em;
  }
`;

export const SearchTitle = styled.h2`
  padding: 0.3em;
  margin: 0.5em auto;
`;

export const ScrollBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
`;
