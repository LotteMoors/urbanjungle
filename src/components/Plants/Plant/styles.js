import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto;
  height: 25em;
  width: 25%;
`;

export const Body = styled.div`
  height: auto;
  min-height: 25em;
  width: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 1.5em;
  box-shadow: 2px 2px 3px 3px rgba(13, 39, 17, 0.7);
`;

export const ImageBox = styled.div`
  background: transparent;
  
`;
export const Content = styled.div`  
  height: 50%;
  text-align: center;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0px auto;
  font-size: 1.6em;
`;

export const Side = styled.h3`
  font-size: 1em;
  margin: 10px auto;
  text-align: center;
`;

export const Button = styled.button`
  background-color: rgba(13, 39, 17, 0.7);
  color: white;
  padding: 0.5em;
`;
