import Reveal from "./Reveal";

function SectionHeading({ title, className = "" }) {
  return (
    <Reveal
      as="h2"
      className={`h-section mb-14 max-w-3xl lg:max-w-5xl md:mb-20 ${className}`}
    >
      {title}
    </Reveal>
  );
}

export default SectionHeading;
