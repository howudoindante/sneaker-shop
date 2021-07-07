import React from "react";
import styles from "./Button.module.scss";

export enum iconNames {
  Forward = "forward",
  Back = "back",
}

interface ButtonProps {
  label: string;
  icon: iconNames;
  onButtonClick: () => void;
}

const Button = ({ label, icon, onButtonClick }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} text-uppercase d-flex justify-center align-center`}
      onClick={onButtonClick}
    >
      {label}
      <img
        src={`/img/${icon}.svg`}
        className={`${styles.arrow} ${
          icon === iconNames.Forward ? "" : styles.goBack
        }`}
        alt={label}
      />
    </button>
  );
};

export default Button;
