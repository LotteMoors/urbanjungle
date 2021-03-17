import styled from "styled-components";

export const HoverBox = styled.div`
  color: #000;
  width: 100%;
  min-width: 15vh;
  text-align: center;
  :hover {
    background-color: rgba(120, 100, 100, 0.6);
    cursor: pointer;
    color: black;
    border-radius: 2px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0vh 10vh;
  height: auto;
  width: 100%;
  @media (max-width: 768px) {
   margin: 0 auto; 
   max-width:50%;
   justify-self:right; 
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0px 10px;
  color: black;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;   
  }
`;

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 100%;
  margin: 0;
  font-size: 20px;
  height: auto;
  background-color: white; 
`;
export const Bar = styled.div`
  width:80%;
  display:flex;
  justify-self:right;
`
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto 5vh;
  @media (max-width: 768px) {
    margin: 0px;
    font-size: 1.3rem;
  }
`;

const Styles = { Logo, HoverBox, Nav, Bar, Box };

export default Styles;
