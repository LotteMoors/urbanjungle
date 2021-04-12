import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../../Carousel";

const More = ({ self,  setMore }) => {
  const [data, setData] = useState('');
  const [img ,setImg] = useState(true);
 

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

  return (
    <div className="full" style={{ margin: "0", width:'100%' }} >
      { data && img === true  ? (
         <>
          <div className="main">
            <div className="img-box">
              <img
                className="img"
                src={data.image_url && data.image_url}
                alt=""
              />
            </div>
            <div className="content-two" >
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

              {/* {!data.images.flower &&
              !data.images.other &&
              !data.images.fruits &&
              !data.images.leaf &&
              !data.images.bark &&
              !data.images.other &&
              !data.images.undefined ? null : (
                <button
                  className="img-btn waves-effect waves-dark"
                  onClick={() => setImg(false)}
                >
                  MORE IMAGES »
                </button>
              )} */}
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
            ) : null}{" "}
          </div>

          <img
            onClick={() => setMore(false)}
            className="close-btn"
            src="https://i.ibb.co/4S7dQgY/close.png"
            alt=""
          />
        </>
      ) : img === false ? (
        <div className="screen">
          <Carousel setImg={setImg} data={data} />
        </div>
      ) : null}
    </div>
  );
};

export default More;