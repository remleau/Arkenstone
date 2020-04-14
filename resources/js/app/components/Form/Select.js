import React from "react";

const Select = (props) => {

  return (
    <div className="pb-4">
			<label className="block pb-1 uppercase text-sm1">
				{props.label}
			</label>
			<select className="block w-full" name={props.name}>
				{props.options.map((option, key) => (
					<option value={option.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()} key={key}>{option}</option>
				))}
			</select>
    </div>
  );
}

export default Select;
