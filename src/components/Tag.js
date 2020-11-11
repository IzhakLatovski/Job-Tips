import React from "react";

const Tag = ({ name, color }) => {
  return (
    <div className="tag" style={{ backgroundColor: color }}>
      {name}
    </div>
  );
};

export default Tag;
