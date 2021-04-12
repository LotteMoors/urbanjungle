import styled from "styled-components";

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  height: 100%;   
`;

export const Title = styled.h1`
  font-size: 2em;
  margin: 0 0 0 0.5em;
  color: black;
  min-width: 30vh;
  display: inline;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 1.8em;
    margin: 0;
    align-items:right;
  }
`;

export const Img = styled.img`
  margin: 0 auto;
  width: 2.3em;
  height: 2.3em;
  @media (max-width: 350px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width:15vh;
  height: auto;
  min-height: 4.5em;
  max-height: 4.5em;
  background-color: white;
`;

export const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  height: 100%;
  height: 4.5em;
  width: auto;

  margin: 0;
  align-items: center;
`;

export const HoverBox = styled.div`
  color: #000;
  height: auto;
  width: 100%;
  min-width: 10vh;
  height: 100%;
  max-width: 25vh;
  padding: 0 1.6em ;
  margin: 0;
  text-align: center;
  font-size: 1.5em;
  :hover {
    background-color: #19a771;
    color: #f0ffff;
    cursor: pointer;
    border-radius: 2px;
  }
  @media (max-width: 768px) {
    padding: 3px 0px;
    text-align: center;
    font-size: 1em;
  }
`;

const Styles = { Logo, HoverBox, Nav, Box, Img };

export default Styles;
