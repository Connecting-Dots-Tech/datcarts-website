import "./PageTop.css";

interface PageTopProps {
  pageName: string;
}

const PageTop = ({ pageName }: PageTopProps) => {
  return (
    <div className="PageTop-container">
      <div className="PageTop-Shadow" />
      <h1>{pageName}</h1>
    </div>
  );
};

export default PageTop;
