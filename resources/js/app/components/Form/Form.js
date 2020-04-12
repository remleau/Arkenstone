import React, { useContext } from "react";
import { ProjectContext } from './../../utils/ProjectContext.js';

const Form = (props) => {

  const [projects, setProjects] = useContext(ProjectContext);

  const validation = (e) => {
    e.preventDefault();

    let formData = {};
    let validation = true;
    let form = e.currentTarget;
    let inputs = form.querySelectorAll('input.required');

    inputs && inputs.forEach((input) => {
      if(input.value === ''){
        input.classList.add('error');
        validation = false;
      }else{
        input.classList.remove('error');
        validation = validation && true;
      }
    });

    if(validation){
      //Axios post
      formData = new FormData(form);
      formData = Object.fromEntries(formData.entries());

      if(props.type == "project"){
        setProjects(prevProjects => [...prevProjects, {
          name: formData.name,
          statut: formData.statut
        }])
      }

      // Delete data
      inputs && inputs.forEach((input) => {
        input.value = '';
      });

      form.parentElement.querySelector('.block__modal .btn_close').click();
      console.log('validated')
    }
  }

  return (
    <form onSubmit={validation}>
      {props.children}
    </form>
  );
}

export default Form;
