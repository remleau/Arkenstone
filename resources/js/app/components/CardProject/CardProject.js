import React from "react";

const CardProject = (props) => {

  return (
    <article className="p-4 w-1/5">
      <div className="projet relative h-64 rounded-md overflow-hidden flex items-end p-4">
        <div className="overlay black"></div>
        <div className="z-20">
          <h3 className="pb-3 text-white">{props.name}</h3>
          <button>Voir le projet</button>
        </div>
      </div>
    </article>
  );
}

export default CardProject;
