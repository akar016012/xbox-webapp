import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
};
