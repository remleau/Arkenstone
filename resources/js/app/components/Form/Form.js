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
        //API CALL
        window.axios
        // The API we're requesting data from
        .post("/api/project/create", {
          'name': formData.name,
          'statut': {
            'key': formData.statut,
            'label': formData.statut.charAt(0).toUpperCase() + formData.statut.slice(1)
          },
        })
        // Once we get a response, we'll map the API endpoints to our props
        .then((response) => {
          setProjects(prevProjects => [...prevProjects, {
            name: response.data.name,
            statut: {
              // Don't need to send the label
              key: response.data.statut,
              label: response.data.statut.label
            }
          }]);

        })
        // We can still use the `.catch()` method since axios is promise-based
        .catch(error => console.log(error));

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
