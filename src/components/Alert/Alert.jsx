import React from 'react';
import "./Alert.css";

function Alert({ alert, currentCharacter }) {
  const { alertOpen, success } = alert;
 
  return (
    <div className={
      // If alert is open, execute "success" condition, else display nothing
      // If success is true, make background green, else red,
      (alertOpen) ? 
      (success) ? "alert alert-success" : "alert alert-fail"  
      : 
      "alert-off"
    }>
      <p>{ (success) ? `You found ${currentCharacter}!` : "Keep trying!"}</p>
    </div>
  );
}

export default Alert;