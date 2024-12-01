import "./Widget.css";

export type WidgetProps = {
  size: "small" | "medium";
  className?: string;
  children?: React.ReactNode;
};

const Widget: React.FC<WidgetProps> = ({ className, size, children }) => {
  return (
    <section className={`widget widget-${size} ${className}`} role="region">
      {children}
    </section>
  );
};

export default Widget;
