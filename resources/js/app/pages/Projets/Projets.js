import React, { useState } from 'react';
import Banner from './../../components/Banner';
import Modal from './../../components/Modal';
import UserCan from './../../components/Permissions';


const Projets = () => {

  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  }

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className="page__projets">

      <div className="flex items-center justify-between pb-8">
        <Banner pageTitle="Projets" />
        <UserCan>
          <button onClick={showModal}>Ajouter un projet</button>
        </UserCan>
      </div>

      <Modal show={modal} hide={closeModal} title="Ajouter un projet">
        modal allo
      </Modal>

      <div className="flex flex-wrap -mx-4">
        <article className="p-4 w-1/5">
          <div className="projet relative h-64 rounded-md overflow-hidden flex items-end p-4">
            <div className="overlay black"></div>
            <div className="z-20">
              <h3 className="pb-3 text-white">Nom du projet</h3>
              <button>Voir le projet</button>
            </div>
          </div>
        </article>
        <article className="p-4 w-1/5">
          <div className="projet relative h-64 rounded-md overflow-hidden flex items-end p-4">
            <div className="overlay black"></div>
            <div className="z-20">
              <h3 className="pb-3 text-white">Nom du projet</h3>
              <button>Voir le projet</button>
            </div>
          </div>
        </article>
      </div>

    </div>
  );
}

export default Projets;
