import "./Widget.css";

export type WidgetProps = {
  size: "small" | "medium";
  className?: string;
  children?: React.ReactNode;
  href?: string;
};

const Widget: React.FC<WidgetProps> = ({ className, size, children, href }) => {
  if (href) {
    return (
      <a href={href}>
        <section className={`widget widget-${size} ${className}`}>
          {children}
        </section>
      </a>
    );
  }
  return (
    <section className={`widget widget-${size} ${className}`} role="region">
      {children}
    </section>
  );
};

export default Widget;
