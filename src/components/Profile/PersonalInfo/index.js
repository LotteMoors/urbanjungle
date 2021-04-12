import React, { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import {
  Box,
  Container,
  Img,
  ImgBox,
  ProfileData,
  Details,
  ReplaceText,
  UserName,
  NameBox,
  EditIcon,
} from "./styles";
import EditContainer from "./editContainer";


const PersonalInfo = () => {
  const { username } = useSelector((state) => state.firebase.profile);
  const { uid } = useSelector((state) => state.firebase.auth);
  const { profile } = useSelector((state) => state.firebase);

  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    profile &&  setData({
          firstName: profile.firstName,
          lastName: profile.lastName,
          location: profile.location,
          img: profile.img,
        });
  }, [uid, profile]);

  const handleClick = () => {
    setEdit(!edit);
  };

  return (
    <Box>
      {!edit ? (
        <>
          <Container>
            <ImgBox>
              {profile.img ? (
                <Img src={profile.img} alt="" />
              ) : (
                <Img
                  className="replacer"
                  src={
                    "https://media.istockphoto.com/vectors/abstract-dotted-vector-background-halftone-effect-spiral-dotted-or-vector-id1140647479?k=6&m=1140647479&s=170667a&w=0&h=xUlmFv8iEOoFwYRQAF-ADGsX-qIZU_KKbVJ5X8otJYE="
                  }
                  alt=""
                />
              )}
            </ImgBox>
          </Container>
          
          <NameBox>
            <UserName>{username}</UserName>
          </NameBox>
          <ProfileData>
            <Details>
              {profile && profile.firstName  ? (
                <p> • {profile.firstName}</p>
              ) : (
                <ReplaceText>« First name » </ReplaceText>
              )}
              {profile && profile.lastName ? (
                <p> • {profile.lastName}</p>
              ) : (
                <ReplaceText> « last name  »  </ReplaceText>
              )}
              {profile && profile.location ? (
                <p> • {profile.location} </p>
              ) : (
                <ReplaceText>« location »  </ReplaceText>
              )}
            </Details>
            <EditIcon onClick={handleClick}></EditIcon>
          </ProfileData>
        </>
      ) : (
        <EditContainer
          data={data}
          setData={setData}
          profile={profile}
          uid={uid}
          name={username}
          setEdit={setEdit}
        />
      )}
    </Box>
  );
};



export default PersonalInfo

