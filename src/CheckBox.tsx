import React, { useState } from "react";

interface IProps {
  checkOut: boolean;
}

const CheckBox: React.FC<IProps> = ({ checkOut = false }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked((checkOut) => !checkOut);
  };

  return (
    <input
      type="checkbox"
      onChange={handleCheck}
      checked={checkOut ? checkOut : checked}
    />
  );
};

export default CheckBox;
