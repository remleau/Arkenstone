import React, { useState } from "react";

import Error from './Error';

const Input = (props) => {

	const [error, setError] = useState("");

	const handleInputChange = (e) => {

		if (props.required){
			if (!e.target.value) {
				e.target.classList.add('error');
				setError("Ce champs ne peut être vide")
			}else{
				e.target.classList.remove('error');
				setError("")
			}
		}

		if (props.onChange){
			props.onChange(e)
		}
	}

  return (
    <div className="pb-4">
			{props.label ? 
				<label className="block pb-1 uppercase text-sm1">
					{props.label}
					{error ? <Error value={error} /> : ""}
				</label>
			:	"" }
			<input
			 defaultValue={props.value}
			 className={(props.required ? 'required' : '') + " block w-full"}
			 placeholder={props.placeholder}
			 type={props.type}
			 name={props.name}
			 onChange={handleInputChange}
			 onKeyUp={handleInputChange}
			/>
    </div>
  );
}

export default Input;
