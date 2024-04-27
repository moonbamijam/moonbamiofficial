type Props = {
  label?: string;
  detail?: string | number;
};
export default function Detail({ label, detail }: Props) {
  return (
    <div className="details flex">
      <div className="label flex">
        <span className="switch-text-color capitalize w-[100px] lg:w-[115px] xl:w-[130px] text-format">
          {label}
        </span>
        <span>:</span>
      </div>
      <span className="switch-text-color capitalize flex flex-wrap w-[200px] lg:w-[300px] xl:w-[400px] text-format">
        {detail}
      </span>
    </div>
  );
}
