type DescriptionProps = {
  paragraph: string;
  customStyles?: string;
};

export default function Description({
  paragraph,
  customStyles,
}: DescriptionProps) {
  return (
    <p className={`whitespace-pre-line tracking-wide ${customStyles}`}>
      {paragraph}
    </p>
  );
}
