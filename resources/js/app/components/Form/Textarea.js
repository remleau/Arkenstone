import React from "react";

const Textarea = (props) => {

  return (
    <div className="">
			<label>
				{props.label}
			</label>
			<input type={props.type} name={props.name} />
    </div>
  );
}

export default Textarea;
