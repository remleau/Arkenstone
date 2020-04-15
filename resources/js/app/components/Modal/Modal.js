import React, { useState, useEffect } from "react";

import close from './../../../../../public/images/svg/icon-x-circle.svg';


const Modal = (props) => {

  return (
    <section className={"block__modal " + (props.show ? 'block' : 'hidden')}>
      <div className="flex items-center justify-between pb-4">
        {props.title ? <h2>{props.title}</h2> : null}
        <button onClick={props.hide} className="btn_close">
          <img className="w-5" src={close} alt="Close" />
        </button>
      </div>
      {props.children}
    </section>
  );
}

export default Modal;
