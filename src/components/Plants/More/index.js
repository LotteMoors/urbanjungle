import React, { useState, useEffect, useContext } from "react";
import { Context } from "../index.js";
import { useSelector } from "react-redux";
import Loader from "../../Loader";
import Carousel from "./Carousel";
import LikeIcon from "../Card/LikeIcon";
import HomeIcon from "../Card/HomeIcon";
import axios from "axios";
import "./style.scss";

const More = ({ setSelf }) => {
  const { self, img, updateImg } = useContext(Context);
  const [data, setData] = useState(null);
  const [liked, setLiked] = useState(undefined);
  const [home, setHome] = useState(undefined);
  const { LikedPlants, HomePlants } = useSelector(
    (state) => state.firestore.data
  );
  const { uid } = useSelector((state) => state.firebase.auth);
  useEffect(() => {
    data ? setLiked(LikedPlants) : setLiked(undefined);
    data ? setHome(HomePlants) : setHome(undefined);
  }, [LikedPlants, HomePlants, data]);

  const URL = `${self}?token=${process.env.REACT_APP_TREFLE_TOKEN}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URL, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        widthCredentials: true,
      });

      setData(result.data.data);
    };

    fetchData();
  }, [URL]);

  if (!data) {
    return <Loader />;
  }
  return (
    <div className="full">
      {img ? (
        <>
          <div className="main">
            <div className="img-box">
              <img className="img" src={data.image_url} alt="" />
            </div>
            <div className="content">
              <h1 className="title"> {data.common_name}</h1>
              {data.scientific_name && (
                <h4 className="scientific-name">
                  <i>Scientific Name : </i> {data.scientific_name}
                </h4>
              )}
              {data.family_common_name ? (
                <h4 className="family-name">
                  <i>Family : </i> {data.family_common_name}
                </h4>
              ) : data.family ? (
                <h4 className="family-name">
                  <i>Family : </i>
                  {data.family}
                </h4>
              ) : null}

              {data.edible === true ? (
                <h5 className="edible">
                  EDIBLE <span className="check">✓</span>
                </h5>
              ) : null}
              {console.log(data.images)}

              {!data.images.flower &&
              !data.images.other &&
              !data.images.fruits &&
              !data.images.leaf &&
              !data.images.bark &&
              !data.images.other &&
              !data.images.undefined ? null : (
                <button
                  className="img-btn waves-effect waves-dark"
                  onClick={() => updateImg(false)}
                >
                  MORE IMAGES »
                </button>
              )}
            </div>
            {data.distribution.native ? (
              <div className="native-box">
                <h4>Nativity</h4>
                <div className="native-scroll">
                  <ul className="native">
                    {data.distribution.native &&
                      data.distribution.native.map((nt, index) => (
                        <li className="list-item" key={index}>
                          • {nt}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
          <div className="icons">
          <HomeIcon home={home} query={`${uid}+${data.id}`} item={data} />
          <LikeIcon liked={liked} query={`${uid}+${data.id}`} item={data} />
          </div>
          <img
            onClick={() => setSelf(null)}
            className="close-btn"
            src="https://i.ibb.co/4S7dQgY/close.png"
            alt=""
          />
          
        </>
      ) : (
        <div className="screen">
          <Carousel data={data} />
        </div>
      )}
    </div>
  );
};

export default More;
