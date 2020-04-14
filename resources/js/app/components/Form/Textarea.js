import React from "react";

const Textarea = (props) => {

  return (
		<div className="pb-4">
			<label className="block pb-1 uppercase text-sm1">
				{props.label}
			</label>
			<textarea className={(props.required ? 'required' : '') + " block w-full"} name={props.name} ></textarea>
    </div>
  );
}

export default Textarea;
