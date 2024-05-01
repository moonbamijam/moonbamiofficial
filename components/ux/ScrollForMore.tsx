import { FaCaretDown } from "react-icons/fa6";
import useScrollForMore from "@hooks/useScrollForMore";

export default function ScrollForMore() {
  const { scrollSign } = useScrollForMore();

  return (
    <div
      id="scroll-sign"
      className={`${scrollSign} flex flex-col items-center gap-1 mb-[30px] animate-bounce`}
    >
      <p className="switch-text-color">Scroll down for more!</p>
      <div className="rounded-full bg-black p-1 dark:bg-transparent">
        <FaCaretDown />
      </div>
    </div>
  );
}
