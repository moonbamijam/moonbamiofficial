type CircleGradientProps = {
  darkModeOnly: boolean;
  color?: string;
  size?: string;
  blur?: string;
  opacity?: string;
};

export default function CircleGradient({
  darkModeOnly,
  color,
  size,
  blur,
  opacity,
}: CircleGradientProps) {
  return (
    <>
      {darkModeOnly == true ? (
        <div
          className={`absolute rounded-full z-[-50] blur-[${blur}] opacity-${opacity} ${
            "bg-" + [color]
          } w-[${size}] h-[${size}]`}
        ></div>
      ) : null}
    </>
  );
}
