import styled from "styled-components";

export const Full = styled.div`
  /* background: url("https://images.unsplash.com/photo-1541959833400-049d37f98ccd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-repeat: no-repeat; */
  background-color: #c19a6b;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  margin: 0 auto;
  width: 85%;
  margin-top: 4em;
  padding-bottom: 2em;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  color:	#faebd7;
  min-height: 75vh;
  background: #c19a6b;
  word-break: break-word;
  @media (max-width: 560px) {
    margin-top: 2em;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
`;

export const Title = styled.h1`
  font-size: 4.5em;
  font-weight: 500;
  @media (max-width: 560px) {
    margin: 0.5em auto;
  }
`;

export const Trefle = styled.h3`
  font-size: 2em;
  font-weight: 300;

  & a {
    width: 100%;
    position: relative;
    color: green;
    width: 13vh;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: green;
      bottom: 0; //to place it in bottom
      left: 0;
    }
    display: inline-block;
    &::after {
      transform: scaleX(0);
    }
    &:hover::after {
      transform: scaleX(1);
    }
    &::after {
      transition: transform 0.25s linear;
    }
    &::after {
      transform-origin: bottom right;
    }
    &:hover::after {
      transform-origin: bottom left;
    }
  }
`;

export const ButtonBox = styled.div`
  height: 15vh;
  margin: 5em auto;
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 560px) {
    flex-flow: column;
    justify-content: center;
    width: 85%;
  }
`;

export const Button = styled.button`
  margin:auto 0 ;
  font-weight: 400;
  min-width: 15vh;
  max-width: 45vh;
  width: 100%;
  height: 15vh;
  border: none;
  border-radius:3px;
  font-size: 2.5em;
  cursor: pointer;
  background-color: #4DAF6E;
  color: black;

  border-radius: 3px;
  .link-home {
    color: black;
  }
  &:focus {
    background-color: #6BC199;
  }
  &:hover {
    background-color: #6BC199;
    .link-home {
      color: black;
    }
  }
  @media (max-width: 560px) {
    min-height: 12vh;
    min-width: 100%;
    margin: 0.2em auto;
  }
`;
