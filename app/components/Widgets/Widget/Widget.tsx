import "./Widget.css";

type WidgetProps = {
  size: "small" | "medium";
  className?: string;
  children?: React.ReactNode;
};

const Widget: React.FC<WidgetProps> = ({ className, size, children }) => {
  return (
    <section className={`widget widget-${size} ${className}`}>
      {children}
    </section>
  );
};

export default Widget;
