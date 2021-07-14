import React from "react";

function Button(props) {
	return (
		<button onClick={props.handleAddition} className="button-color">
			button
		</button>
	);
}

export default Button;
