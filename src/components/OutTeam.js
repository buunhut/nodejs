import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Team from "./Team";
import axios from "axios";
import { updateListOurTeam } from "../redux/dataSlice";

const OutTeam = () => {
  const dispath = useDispatch();
  const { listOurTeams } = useSelector((state) => state.dataSlice);
  const getTeams = async () => {
    const res = await axios({
      method: "get",
      url: "https://api.nodejs.edu.vn/nodejs/teams",
    });
    const { statusCode, content } = res.data;
    if (statusCode === 200) {
      dispath(updateListOurTeam(content));
    }
  };
  useEffect(() => {
    getTeams();
  }, []);
  return (
    <div id="ourTeam">
      <h1>
        <i className="fa-solid fa-users"></i> Our teams
      </h1>
      <div className="content">
        {listOurTeams?.map((item, index) => {
          return <Team item={item} index={index} key={index} />;
        })}
      </div>
      <button type="button">
        <a href="tel:+84909240886">
          <i className="fa-solid fa-handshake"></i> Join to us
        </a>
      </button>
    </div>
  );
};

export default OutTeam;
