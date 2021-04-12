import React from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../../store/actions/authActions.js";
import FileBase from "react-file-base64";
import {
  Container,
  ImgBox,
  Img,
  InfoInput,
  ProfileData,
  Details,
  UserName,
  AddIcon,
  NameBox,
} from "../styles";

const EditContainer = ({ profile, data, setData, uid, name, setEdit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(data);
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateUser(data));
    setEdit(false);
  };

  return (
    <>
      <Container>
        <ImgBox>        
          {data && data.img ? (
            <Img className="edit" src={data.img} alt="" />
          ) : profile && profile.img ? (
            <Img src={profile.img} alt="" />
          ) :  (
            <Img
              className="replacer edit"
              src="https://media.istockphoto.com/vectors/abstract-dotted-vector-background-halftone-effect-spiral-dotted-or-vector-id1140647479?k=6&m=1140647479&s=170667a&w=0&h=xUlmFv8iEOoFwYRQAF-ADGsX-qIZU_KKbVJ5X8otJYE="
              alt=""
            />
          )}

          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setData({ ...data, img: base64 })}
          />
        </ImgBox>
      </Container>
      <NameBox>
        <UserName className="edit">{name}</UserName>
      </NameBox>
      <ProfileData>
        <Details className="edit">
          <div className="input-field col s12">
            <label
              className={data?.firstName ? "active" : ""}
              htmlFor="firstName"
            >
              First name
            </label>

            <InfoInput
              value={data?.firstName}
              type="text"
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="input-field col s12">
            <label
              className={data?.lastName ? "active" : ""}
              htmlFor="lastName"
            >
              Last name
            </label>
            <InfoInput
              value={data?.lastName}
              type="text"
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="input-field col s12">
            <label
              className={data?.location ? "active" : ""}
              htmlFor="location"
            >
              Location
            </label>
            <InfoInput
              value={data?.location}
              type="text"
              name="location"
              onChange={handleChange}
            />
          </div>
        </Details>
        <AddIcon onClick={handleClick}></AddIcon>
      </ProfileData>
    </>
  );
};

export default EditContainer;
