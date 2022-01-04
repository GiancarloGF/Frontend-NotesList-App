import React from "react";
import Styles from "./styles.module.css";

const Notification = ({ notification }) => {
  const { message, status } = notification;
  if (message === null) {
    return null;
  }

  return (
    <div
      className={`${Styles.container} ${Styles[status]}`}
    >
      {message}
    </div>
  );
};

export default Notification;
