import React, { useState } from 'react';
import Banner from './../../components/Banner';
import Modal from './../../components/Modal';
import UserCan from './../../components/Permissions';

const Employes = () => {

  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  }

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className="page__employes">

      <div className="flex items-center justify-between pb-8">
        <Banner pageTitle="Employés" />
        <UserCan>
          <button onClick={showModal}>Ajouter un employé</button>
        </UserCan>
      </div>

      <Modal show={modal} hide={closeModal} title="Ajouter un employé">
        modal allo
      </Modal>

    </div>
  );
}

export default Employes;
