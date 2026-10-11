import { useInView } from "../hooks/useInView";

function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      style={{ "--d": `${delay}ms` }}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
