type Props = {
  opacity?: string;
  colorFrom?: string;
  colorTo?: string;
};

export default function Gradient({ opacity, colorFrom, colorTo }: Props) {
  return (
    <div
      className={`absolute inset-0 h-full w-full bg-gradient-to-t ${
        "opacity-" + opacity
      } ${"from-" + colorFrom} ${"to-" + colorTo}`}
    ></div>
  );
}
