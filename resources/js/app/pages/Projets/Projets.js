import React, { useState, useContext } from 'react';
import { ProjectContext } from './../../utils/ProjectContext.js';

import Banner from './../../components/Banner';
import Modal from './../../components/Modal';
import UserCan from './../../components/Permissions';
import Form from './../../components/Form';
import Project from './../../components/CardProject';

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
          <button onClick={showModal}>Ajouter un projet</button>
        </UserCan>
      </div>

      <Modal show={modal} hide={closeModal} title="Ajouter un projet">
        <Form action="someurltopost" type="project">
          <input className="required" name="name" type="text" placeholder="Nom du projet" />
          <input className="required" name="statut" type="text" placeholder="Statut du projet" />
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
