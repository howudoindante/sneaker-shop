import React from "react";
import styles from "./Button.module.scss";
import { useSelector } from "react-redux";

export enum iconNames {
  Forward = "forward",
  Back = "back",
}

interface ButtonProps {
  label: string;
  icon: iconNames;
  onButtonClick?: () => void;
}

const Button = ({ label, icon, onButtonClick }: ButtonProps) => {
  const { isLoading } = useSelector((state: any) => state.cartItems);
  return (
    <button
      className={`${
        styles.button
      } text-uppercase d-flex justify-center align-center ${
        isLoading ? styles.loading : ""
      }`}
      onClick={onButtonClick}
      disabled={isLoading ? true : false}
    >
      {isLoading ? "Обрабатываем заказ" : label}
      {isLoading ? null : (
        <img
          src={`/img/${icon}.svg`}
          className={`${styles.arrow}  ${styles.arrow_animate} ${
            icon === iconNames.Forward ? "" : styles.goBack
          }`}
          alt={label}
        />
      )}
    </button>
  );
};

export default Button;
