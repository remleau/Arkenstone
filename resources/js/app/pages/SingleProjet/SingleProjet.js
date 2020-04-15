import React from 'react';
import { useParams } from "react-router-dom";

const SingleProjet = ({match, location}) => {

  let { slug } = useParams();

  return (
    <div>single {slug}</div>
  );
}

export default SingleProjet;
