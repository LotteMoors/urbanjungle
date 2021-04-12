import styled from "styled-components";

export const Full = styled.div`
  width: 100%;
  min-width:15vh;
  height: auto;
  margin: 4em auto;
  background-color: #ffe194;
`;

export const Main = styled.div`
  background-color: #ffe194;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const Info = styled.div`
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
`;

export const HomeContainer = styled.div`
  margin: 4em auto;
  height: auto;
  display: flex;
  flex-flow: row wrap;
`;
export const LikedContainer = styled.div`
  margin: 4em auto;
  height: auto;
  display: flex;
  flex-flow: row wrap;
`;

export const Title = styled.h1`
  font-size: 4.2em;
  width: 65%;
  padding-left: 0.1em;
  margin: 0 0.3em 0 0;
  .Icon {
    padding-right: 2em;    
  }
`;
export const TitleBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto 3em auto;
  height: 5vh;
  @media (max-width:768px){
      padding:3.5em 0 2.5em 0;
    }
`;

export const HomeBox = styled.div`
  margin: 0 auto;
  width: 90%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
`;

export const PlantBox = styled.div`
  width: 100%;
  min-width:15vh;
  height: 70vh;
  background-image: url("https://i.ibb.co/GPVYTk6/eee.png");
  background-size: cover;
  background-repeat: no-repeat;  
  @media (max-width:768px){
    flex-direction: column;
    justify-content: space-around;
    height:60vh;
  }
`;
export const ButtonBox = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width:768px){
    flex-direction: column;
    justify-content: space-around;
    height:100%;
    padding: 4em;
  }

`;
export const Button = styled.button`
  height: 10vh;
  padding: 1em 1em;
  cursor:pointer;
  display: flex;
  align-items: center;
  font-size: 3em;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background: rgba(250, 250, 250, 0.85);
  &:hover {
    background: rgba(250, 250, 250, 1);
  }
`;

export const GoBackBtn = styled.button`
  width: 25vh;
  border: none;
  font-size: 1.8em;
  background: transparent;
  position: absolute;
  top: 2em;
  left: 0.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  cursor: pointer;
  & p {
    margin-left: 0.3em;
  }
  &:active{
    background: transparent;
  }
  @media (max-width:768px){
    left:-0.25em;
  }
`;


