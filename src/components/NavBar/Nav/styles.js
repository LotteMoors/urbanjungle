import styled from "styled-components";

export const HoverBox = styled.div`
  color: #000;
  width: 100%;
  min-width: 15vh;
  text-align: center;

  :hover {
    background-color: #19a771;
    color: #f0ffff;
    cursor: pointer;
    border-radius: 2px;
  }
  @media (max-width: 768px) {
    padding: 3px 0px;
    text-align: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  height: auto;
  max-width: 100vh;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    width: 70%;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0px 5px;
  color: black;
  min-width: 90%;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 568px) {
    font-size: 1.4rem;
  }
`;

export const Nav = styled.nav`
  position: sticky;
  z-index:1;
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
  position: absolute;
  width: 15vh;
  @media (max-width: 768px) {
    width: 65%;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Styles = { Logo, HoverBox, Nav, Bar, Box };

export default Styles;
