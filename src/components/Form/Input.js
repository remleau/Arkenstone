import React from "react";

const Input = (props) => {

	const handleInputChange = (e) => {
		if (!e.target.value) {
			e.target.classList.add('error');
		}else{
			e.target.classList.remove('error');
		}

		if (props.onChange){
			props.onChange(e)
		}
	}

  return (
    <div className="pb-4">
			{props.label ? <label className="block pb-1 uppercase text-sm1">{props.label}</label>	:	"" }
			<input
			 className={(props.required ? 'required' : '') + " block w-full"}
			 placeholder={props.placeholder}
			 type={props.type}
			 name={props.name}
			 onChange={handleInputChange}
			/>
    </div>
  );
}

export default Input;
