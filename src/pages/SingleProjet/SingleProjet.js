import React from 'react';
import { useParams } from "react-router-dom";

import Banner from './../../components/Banner';
import UserCan from './../../components/Permissions';

import reglages from './../../assets/images/icon-cog.svg';

const SingleProjet = () => {

  let { id } = useParams();

  return (
    <div className="page__single-projets">

      <div className="flex items-center justify-between pb-8">
        <Banner pageTitle={"Nom du projet" + id} />
        <UserCan>
          <div className="flex items-center">
            <button className="ml-2"><img className="w-5" src={reglages} alt="Réglages" /></button>
          </div>
        </UserCan>
      </div>
      
    </div>
  );
}

export default SingleProjet;
