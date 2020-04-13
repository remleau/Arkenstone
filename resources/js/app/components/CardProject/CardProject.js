import React from "react";

const CardProject = (props) => {

  return (
    <article className="p-4 w-1/5 cursor-pointer">
      <div className="block__projet relative h-64 rounded-md overflow-hidden flex items-end p-4">
        <div className="overlay black"></div>
        <div className="z-20 h-full w-full flex flex-col justify-between">
          <div className="block__projet-sub-infos">
            <p>{props.statut}</p>
          </div>
          <div>
            <h3 className="pb-3 text-white">{props.name}</h3>
            <button>Voir le projet</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CardProject;
