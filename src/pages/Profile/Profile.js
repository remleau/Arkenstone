import React, { useContext, useEffect } from 'react';
import { UserContext } from './../../utils/UserContext.js';

import { Form, Input } from './../../components/Form';
import Banner from './../../components/Banner';

const Profile = () => {
  
  const {user, setUser} = useContext(UserContext);

  const validated = (data) => {
    console.log(data)
  }

  return (
    <div className="page__profile">

      <div className="flex items-center justify-between pb-8">
        <Banner pageTitle="Votre compte" />
      </div>

      <div className="">
        <Form validated={validated} reset="false">
          <Input value={user && user.firstName} name="firstName" type="text" label="Prénom" required="required" />
          <Input value={user && user.lastName} name="lastName" type="text" label="Nom" required="required" />
          <Input value={user && user.email} name="email" type="email" label="Courriel" required="required" />
          <Input value={user && user.username} name="username" type="text" label="Username" required="required" />
          <Input value={user && user.password} name="password" type="password" label="Password" required="required" />
          <button>Sauvegarder</button>
        </Form>
      </div>

    </div>
  );
}

export default Profile;
