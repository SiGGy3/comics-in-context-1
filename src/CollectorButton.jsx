import React, { useContext } from "react";
import StyleContext from "./StylesContext";


export default function CollectorButton() {

  const buttonStyling = useContext(StyleContext);

  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
    </div>
  );
}