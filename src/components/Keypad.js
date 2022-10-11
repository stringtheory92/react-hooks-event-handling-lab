import React from "react";

function Keypad() {
  function handleKeypadChange(e) {
    console.log("Entering password...");
  }

  return (
    <div>
      <input type="password" name="" id="" onChange={handleKeypadChange} />
    </div>
  );
}

export default Keypad;
