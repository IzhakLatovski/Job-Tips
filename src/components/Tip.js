import React, { useState } from "react";

import Tag from "./Tag";

const Tip = ({ id, title, text, link, tags }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      {...{
        className: `accordion-item, ${opened && "accordion-item--opened"}`,
        onClick: () => {
          setOpened(!opened);
        }
      }}
      dir="rtl"
    >
      <div {...{ className: "accordion-item__line" }}>
        <h3 {...{ className: "accordion-item__title" }}>
          {id}. {title}
        </h3>
        <span {...{ className: "accordion-item__icon" }} />
      </div>
      <div {...{ className: "accordion-item__tags" }}>
        {tags.cv === true ? <Tag name="קורות חיים" color="#caffbf" /> : null}
        {tags.interview === true ? <Tag name="ראיון" color="#bdb2ff" /> : null}
        {tags.preparation === true ? <Tag name="הכנה" color="#ffd6a5" /> : null}
        {tags.after === true ? (
          <Tag name="אחרי הראיון" color="#ffc6ff" />
        ) : null}
        {tags.skills === true ? <Tag name="כישורים" color="#fdffb6" /> : null}
        {tags.salary === true ? <Tag name="שכר" color="#ffadad" /> : null}
      </div>
      <div {...{ className: "accordion-item__inner" }}>
        <div {...{ className: "accordion-item__content" }}>
          {text.map((par) => {
            return (
              <p {...{ className: "accordion-item__paragraph" }}>
                {par.paragraph}
              </p>
            );
          })}
          <a target="_blank" rel="noreferrer" href={link}>
            קישור לפוסט המקורי בפייסבוק
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tip;
