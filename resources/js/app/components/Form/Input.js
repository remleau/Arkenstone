import React from "react";

const Input = (props) => {

  return (
    <div className="pb-4">
			<label className="block pb-1 uppercase text-sm1">
				{props.label}
			</label>
			<input className={(props.required ? 'required' : '') + " block w-full"} type={props.type} name={props.name} />
    </div>
  );
}

export default Input;
