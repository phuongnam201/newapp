import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import AWrapper from "../about/AWrapper";
import "./team.css";

const Team = () => {
  return (
    <div>
      <Back title="Team" />
      <section className="team padding">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
      <AWrapper />
    </div>
  );
};

export default Team;
