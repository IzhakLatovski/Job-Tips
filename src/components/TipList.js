import React, { useState } from "react";
import Tip from "./Tip";
import tips from "../tips.json";

const TipList = () => {
  const [filtered, setFiltered] = useState(tips);

  function onClick(e) {
    switch (e.target.name) {
      case "cv":
        setFiltered(tips.filter((tip) => tip.tags.cv === true));
        break;

      case "interview":
        setFiltered(tips.filter((tip) => tip.tags.interview === true));
        break;
      case "preparation":
        setFiltered(tips.filter((tip) => tip.tags.preparation === true));
        break;
      case "after":
        setFiltered(tips.filter((tip) => tip.tags.after === true));
        break;
      case "skills":
        setFiltered(tips.filter((tip) => tip.tags.skills === true));
        break;
      case "salary":
        setFiltered(tips.filter((tip) => tip.tags.salary === true));
        break;
      default:
        setFiltered(tips);
        break;
    }
  }

  return (
    <div>
      <div dir="rtl" className="filter-buttons">
        <span style={{ fontWeight: "500" }}>סינון: </span>
        <button
          style={{ backgroundColor: "#9ceaef", marginLeft: "1rem" }}
          onClick={(e) => onClick(e)}
        >
          הצג הכל
        </button>
        <button
          style={{ backgroundColor: "#caffbf" }}
          name="cv"
          onClick={(e) => onClick(e)}
        >
          קורות חיים
        </button>
        <button
          style={{ backgroundColor: "#bdb2ff" }}
          name="interview"
          onClick={(e) => onClick(e)}
        >
          ראיון
        </button>
        <button
          style={{ backgroundColor: "#ffd6a5" }}
          name="preparation"
          onClick={(e) => onClick(e)}
        >
          הכנה
        </button>
        <button
          style={{ backgroundColor: "#ffc6ff" }}
          name="after"
          onClick={(e) => onClick(e)}
        >
          אחרי הראיון
        </button>
        <button
          style={{ backgroundColor: "#fdffb6" }}
          name="skills"
          onClick={(e) => onClick(e)}
        >
          כישורים
        </button>
        <button
          style={{ backgroundColor: "#ffadad" }}
          name="salary"
          onClick={(e) => onClick(e)}
        >
          שכר
        </button>
      </div>

      <div className="accordion-list">
        {filtered.map((tip) => {
          return (
            <Tip
              key={tip.id}
              id={tip.id}
              title={tip.title}
              text={tip.text}
              link={tip.link}
              tags={tip.tags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TipList;
