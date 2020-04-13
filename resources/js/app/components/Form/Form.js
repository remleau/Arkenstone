import React, { useContext } from "react";
import { ProjectContext } from './../../utils/ProjectContext.js';
import { postData } from './../../utils';

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

      formData = new FormData(form);
      formData = Object.fromEntries(formData.entries());

      if(props.type == "project"){

        const postProjects = postData("/api/project/create", {
          name: formData.name,
          statut: {
            key: formData.statut,
            label: formData.statut.charAt(0).toUpperCase() + formData.statut.slice(1)
          }
        }).then(project=>{
          setProjects(prevProjects => [...prevProjects , project])
        })

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
