import React from "react";

const Error = (props) => {

	return (
		<span className="italic text-xs text-error lowercase pl-1">({props.value})</span>
	);
}

export default Error;
