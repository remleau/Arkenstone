import React from 'react';
import Banner from './../../components/Banner';

const Projets = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Banner pageTitle="Projets" />
        <button>Ajouter un projet</button>
      </div>
    </div>
  );
}

export default Projets;
