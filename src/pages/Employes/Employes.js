import React, { useState, useContext } from 'react';
import { UserContext } from './../../utils/UserContext.js';
import { EmployeContext } from './../../utils/EmployeContext.js';

import Banner from './../../components/Banner';
import Modal from './../../components/Modal';
import UserCan from './../../components/Permissions';
import { Form, Input, Error } from './../../components/Form';
import { postData } from './../../utils';

const Employes = () => {

  const { user, setUser } = useContext(UserContext);
  const [employes, setEmployes] = useContext(EmployeContext);

  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  }

  const closeModal = () => {
    setModal(false);
  }

  const validated = (data) => {
    // API CALL
    postData("http://localhost:5000/api/user/create", {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      password: data.password,
      token: user.token
    }).then(response => {
      if (response.status == 201) {
        setEmployes(prevEmployes => [...prevEmployes, response.data])
      } else {
        setError(response.data.error)
      }
    });
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
        <Form validated={validated} reset="false">
          <Input name="firstName" type="text" label="Prénom" required="required" />
          <Input name="lastName" type="text" label="Nom" required="required" />
          <Input name="email" type="email" label="Courriel" required="required" />
          <Input name="username" type="text" label="Username" required="required" />
          <Input name="password" type="password" label="Password" required="required" />
          <div className="flex items-center">
            <button>Ajouter</button>
            {error ? <p className="pl-4"><Error value={error} /></p> : null}
          </div>
        </Form>
      </Modal>

      <div className="block__employes">
        {employes && employes.map((employe)=>(
          <div>
            <p>{employe.firstName + ' ' + employe.lastName}</p>
            <p>{employe.email}</p>
            <p>{employe.lastConnexion ? new Date(employe.lastConnexion).toISOString().substring(0, 10) : "never"}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Employes;
