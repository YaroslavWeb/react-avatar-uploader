import React from "react";

interface IAlertProps {
  children: string
  type: string
}

export const Alert: React.FC<IAlertProps> = ({children, type}) => {
  return (
    <div className={`alert alert-${type} d-flex position-absolute mt-2`} role="alert">
      {children}
    </div>
  );
};
