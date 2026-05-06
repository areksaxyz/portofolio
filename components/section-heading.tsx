import { T } from "@/components/language-provider";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  kicker,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="section-kicker">
        <T id={kicker} />
      </p>
      <h2 className="section-title">
        <T id={title} />
      </h2>
      {description ? (
        <p className="section-copy">
          <T id={description} />
        </p>
      ) : null}
    </div>
  );
}
