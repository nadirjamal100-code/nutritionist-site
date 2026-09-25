import "./SectionHeading.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) => {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p className="text-lg text-muted">{description}</p>}
    </div>
  );
};

export default SectionHeading;
