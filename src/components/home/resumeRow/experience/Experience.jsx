import React from "react";
import MyEducation from '../experience/MyExperience';
import { Fragment } from "react";

function Experience() {
  const arrListItems = [
    {
      title: "2017 - Present",
      description:
        "Diploma in Computer Engineering Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, id officiis quas placeat quia voluptas dolorum rem animi nostrum quae.aliquid repudiandae saepe!.",
    },
    {
      title: "2016 - 2017",
      description:
        "Diploma in Computer Engineering Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, id officiis quas placeat quia voluptas dolorum rem animi nostrum quae.aliquid repudiandae saepe!.",
    },
    {
      title: "2015 - 2016",
      description:
        "Diploma in Computer Engineering Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, id officiis quas placeat quia voluptas dolorum rem animi nostrum quae.aliquid repudiandae saepe!.",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {arrListItems.map((item, index) => (
        <Fragment key={index}>
          <MyEducation title={item.title} description={item.description} />
          {index + 1 < arrListItems.length && <hr />}
        </Fragment>
      ))}
    </div>
  );
}

export default Experience;
