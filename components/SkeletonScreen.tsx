type SkeletonScreenProps = {
  id?: string;
  width?: string;
  height?: string;
  customStyles?: string;
};

export default function SkeletonScreen({
  id,
  width,
  height,
  customStyles,
}: SkeletonScreenProps) {
  return (
    <div
      id={id}
      className={`relative bg-gray-300 dark:bg-dm-surface-light shadow-md animate-pulse ${width} ${height} ${customStyles}`}
    ></div>
  );
}
