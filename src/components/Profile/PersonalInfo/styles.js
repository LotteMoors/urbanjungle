import styled from "styled-components";

export const Box = styled.div`
  min-height: 45vh;
  background: white;
  width: 75%;
  min-width:15vh;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  margin: 0 auto 2em;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column;
    min-height: 77vh;
    height: 100%;
    align-content: center;
    justify-content: center;
    margin: 4em auto;
  }
`;

export const Container = styled.div`
  max-width: 25vh;
  min-height: 25vh;
  max-height: 30vh;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-flow: row;
`;

export const FullEdit = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const Img = styled.img`
  height: 100%;
  width: 15em;
  margin-top: 1em;
  height: 15em;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  padding-top: 0.8em;
  object-fit: cover;
  &.replacer {
    border-radius: 0%;
  }
  &.edit {
    margin-top: 3em;
    margin-bottom: 1em;
  }
  &.replacer.edit {
    margin-top: 5em;
  }
  @media (max-width: 768px) {
    margin-right: 2em;
  }
`;

export const ImgBox = styled.div`
  margin-left: 0 ;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content:center;
  @media (max-width: 768px) {
    width: 100%;
    margin-left:-1em;
  }
  
`;

export const EditIcon = styled.button`
  background: url("https://i.ibb.co/87Zc58n/edit.png");
  background-size: cover;
  width: 2.9em;
  height: 2.9em;
  position: absolute;
  right: 1.5em;
  top: 5.5em;
  border: none;
  cursor: pointer;
  &:active {
    border: none;
  }
  &:focus {
    background-color: white;
  } 
`;

export const AddIcon = styled.button`
  background: url("https://i.ibb.co/c1vTG0d/add.png");
  color: green;
  background-size: cover;
  width: 2.9em;
  height: 2.9em;
  position: absolute;
  right: 1em;
  top: 5.5em;
  border: none;
  cursor: pointer;
  &:active {
    border: none;
  }
  &:focus {
    background-color: white;
  }
`;

export const ProfileData = styled.div`
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  width: 100%;
`;

export const Details = styled.div`
  display: flex;
  position: absolute;
  right: 8em;
  flex-flow: column;
  justify-content: center;
  width: 18%;
  font-size: 1.4em;
  font-weight: 400;
  height: 90%;
  &.edit {
    margin-top: 2em;
    right: 6em;
  }
  @media (max-width: 768px) {
    position: relative;
    left: 0%;
    height: 50%;
    width: 95%;
    font-size:1.5em;
    &.edit {
      padding-bottom: 3em;
      width: 90%;
    }
  }
`;
export const NameBox = styled.div`
  display: flex;
  margin: 0 1em 0;
  width: 100%;
  min-width: 35vh;
  @media (max-width: 768px) {
    margin: 3em auto 2em;
    .edit {
      margin: 1em auto 0;
    }
  }
`;

export const UserName = styled.h1`
  font-size: 5em;
  font-weight: 400;
  margin: 0 auto;
  width: 100%;
  word-wrap: break-word;
  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

export const InfoInput = styled.input`
  min-width: 15vh;
`;

export const ReplaceText = styled.h4`
  font-size: 1.3em;
  font-style: italic;
  opacity: 0.8;
`;
