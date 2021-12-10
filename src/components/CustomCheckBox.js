import React from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

const CustomCheckBox = ({ checked, ...props }) => {
  return checked ? (
    <ImCheckboxChecked {...props} />
  ) : (
    <ImCheckboxUnchecked {...props} />
  );
};

export default CustomCheckBox;
