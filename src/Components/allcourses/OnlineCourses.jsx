import React from "react";
import Title from "../common/heading/Heading";
import { online } from "../../dummydata";

const OnlineCourses = () => {
  return (
    <div>
      <section className="online">
        <div className="container">
          <Title subTitle={"COURSES"} title={"Browse Our Online Course"} />
          <div className="content grid3">
            {online.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="" />
                  <img src={val.hoverCover} alt="" className="show" />
                </div>
                <div className="box-flex">
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineCourses;
