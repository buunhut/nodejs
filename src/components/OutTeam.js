import React from "react";
import { useSelector } from "react-redux";
import Team from "./Team";

const OutTeam = () => {
  const { listOurTeams } = useSelector((state) => state.dataSlice);
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
