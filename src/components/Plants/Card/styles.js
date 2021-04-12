import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 2em auto;
  height: 26em;
  @media (max-width: 568px) {
    height: 22em;
    margin: 0 auto;
  }
`;

export const Body = styled.div`
  height: auto;
  min-height: 28em;
  background-color: white;
  min-width: 18em;
  max-width: 18em;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 1.5em;
  box-shadow: 2px 2px 3px 3px rgba(13, 39, 17, 0.7);
  @media (max-width: 568px) {
    min-width: 12em;
    max-width: 12em;
    max-height: 5em;
    min-height: 20em;
    padding: 0.7em;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  height: 50%;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 568px) {
    height: 20%;
    justify-content: center;
    align-items: center;
    align-items: center;
  }
`;

export const CardTitle = styled.h1`
  text-align: center;
  margin: 0px auto;
  font-size: 1.6em;
  @media (max-width: 568px) {
    font-size: 1.4em;
    margin: 0 auto;
  }
`;

export const IconBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0.5em;
  margin: 1em auto;
  width: 100%;
  @media (max-width: 568px) {
    margin: 0 auto;
  }
`;

export const ImageBox = styled.div`
  background: white;
`;

export const Img = styled.img`
  text-align: center;
  margin: 0px auto;
  height: 17em;
  width: 100%;
  max-width: 15em;
  @media (max-width: 568px) {
    height: 12em;
  }
`;

export const Trash = styled.img`
cursor: pointer;
  height: 25px;
  width: 23px;
`;
