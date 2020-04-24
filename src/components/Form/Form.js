import React from "react";

const Form = (props) => {

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

    if (validation && props.validated){

      formData = new FormData(form);
      formData = Object.fromEntries(formData.entries());

      props.validated(formData);

      // Delete data
      if(!props.reset){
        inputs && inputs.forEach((input) => {
          input.value = '';
        });
      }

    }
  }

  return (
    <form onSubmit={validation}>
      {props.children}
    </form>
  );
}

export default Form;
