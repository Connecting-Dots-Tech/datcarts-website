import "./PageTop.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode; // ReactNode is the recommended type for children
}

const PageTop = ({ pageName }: LayoutProps) => {
  return (
    <div className="PageTop-container">
      <div className="PageTop-Shadow" />
      <h1>{pageName}</h1>
    </div>
  );
};

export default PageTop;
