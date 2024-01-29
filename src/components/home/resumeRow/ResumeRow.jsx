import React from "react";
import Card from "../../common/Card";
import Skills from "../resumeRow/Skills";
import Education from "./Education/Education";
import Experience from '../resumeRow/experience/Experience';
import Language from "./language/Language";

function ResumeRow() {
  return (
    <div>
      <h2 className="row-title">Resume</h2>
      <div className="row">
        <Card title="Education" content={<Education />} />
        <Card title="Expertise" content={<Experience />} />
        <Card title="Skills" content={<Skills />} />
        <Card title="Language" content={<Language />} />
      </div>
    </div>
  );
}

export default ResumeRow;
