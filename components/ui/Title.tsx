type TitleProps = {
  text: string;
  customStyles?: string;
};

export default function Title({ text, customStyles }: TitleProps) {
  return <h1 className={`font-bold tracking-tight ${customStyles}`}>{text}</h1>;
}
