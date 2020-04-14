import React, { useState, useContext } from 'react';
import { ProjectContext } from './../../utils/ProjectContext.js';

import Banner from './../../components/Banner';
import Modal from './../../components/Modal';
import UserCan from './../../components/Permissions';
import {Form, Input, Select, Textarea} from './../../components/Form';
import Project from './../../components/CardProject';
import reglages from './../../../../../public/images/svg/icon-cog.svg';

const Projets = () => {

  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  }

  const closeModal = () => {
    setModal(false);
  }

  const [projects] = useContext(ProjectContext);

  return (
    <div className="page__projets">

      <div className="flex items-center justify-between pb-8">
        <Banner pageTitle="Projets" />
        <UserCan>
          <div className="flex items-center">
            <button onClick={showModal}>Ajouter un projet</button>
            <button className="ml-2"><img className="w-5" src={reglages} alt="Réglages" /></button>
          </div>
        </UserCan>
      </div>

      <Modal show={modal} hide={closeModal} title="Ajouter un projet">
        <Form action="someurltopost" type="project">
          <Input label="Nom du projet*" name="name" type="text" required="required" />
          <Textarea label="Description du projet*" name="description" required="required" />
          <Select label="Statut du projet*" name="statut" options={['Ouvert','Attente','Fermé','Archivé']} />
          <button>Ajouter</button>
        </Form>
      </Modal>

      <div className="block__projets flex flex-wrap -mx-4">
        {projects.map((project, key) => (
          <Project key={key} name={project.name} statut={project.statut.label} />
        ))}
      </div>

    </div>
  );
}

export default Projets;
