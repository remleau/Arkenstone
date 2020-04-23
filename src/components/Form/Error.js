import React from "react";

const Error = (props) => {

	return (
		<div className="-mt-4 p-1 px-3 text-left bg-error rounded">
			<p className="italic text-xs text-white">{props.value}</p>
		</div>
	);
}

export default Error;
